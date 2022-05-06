
import { _decorator, Component, Node } from 'cc';
import { GameState } from '../global/GameConstants';
const { ccclass, property } = _decorator;


@ccclass('GameManager')
export class GameManager extends Component {

    private static _instance;
    public get instance() {
        return GameManager._instance;
    }

    private currentGameState: GameState;

    onLoad() {
        GameManager._instance = this;
    }

    getGameState() {
        return this.currentGameState;
    }

    setGameState(state: GameState) {
        this.currentGameState = state;
    }

}