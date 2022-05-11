
import { _decorator, Component, Node, Vec2, v3, screen, UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Paddle')
export class Paddle extends Component {

    boundriesStart: number;
    boundriesEnd: number;
    startYPos: number;

    start() {
        const uiTransform = this.getComponent(UITransform);
        this.boundriesStart = 0 + uiTransform.contentSize.width / 2;
        this.boundriesEnd = screen.windowSize.width - uiTransform.contentSize.width / 2;
        this.startYPos = this.node.getWorldPosition().y;
    }

    moveTo(uiPos: Vec2) {
        if (uiPos.x <= this.boundriesStart || uiPos.x >= this.boundriesEnd)
            return;
        this.node.setWorldPosition(v3(uiPos.x, this.startYPos, 0));
    }
}