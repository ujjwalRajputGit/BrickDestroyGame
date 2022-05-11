
import { _decorator, Component, Node, Prefab, instantiate, Vec2, Vec3, LayoutComponent } from 'cc';
import { LevelData } from '../global/LevelData';
const { ccclass, property } = _decorator;


@ccclass('LevelManager')
export class LevelManager extends Component {

    @property({ type: Prefab })
    brickPrefabs: Prefab[] = [];

    @property(Node)
    brickParentNode: Node

    private nodesPosition: Vec3[] = [];
    private brickLayout: LayoutComponent;
    private currentLevel: number = 0;
    private liveLevelData;

    onLoad() {
        this.brickLayout = this.brickParentNode.getComponent(LayoutComponent);
    }


    generateNextLevel() {
        this.generateLevel(++this.currentLevel);
    }

    generateCurrentLevel() {
        this.generateLevel(this.currentLevel);
    }

    totalDestroableBrick() {
        return this.liveLevelData.destroyableBricks;
    }

    generateLevel(level: number) {
        console.log("level: ", level);

        this.brickParentNode.removeAllChildren()
        this.liveLevelData = LevelData[level];
        if (!this.liveLevelData) {
            this.currentLevel = 1;
            this.liveLevelData = LevelData[1];
        }
        this.liveLevelData.bricks.forEach(brick => {
            const node = instantiate(this.brickPrefabs[brick]);
            this.brickParentNode.addChild(node);
        });

        setTimeout(() => {
            this.initLevel()
            console.log("node pos: ", this.nodesPosition);
        }, 500);
    }

    initLevel() {
        this.brickParentNode.children.forEach(child => {
            this.nodesPosition.push(child.getPosition())
        });
        this.brickLayout.enabled = false;
        this.brickParentNode.children.forEach((child, index) => {
            this.brickParentNode.children[index].setPosition(this.nodesPosition[index])
        });
    }

}