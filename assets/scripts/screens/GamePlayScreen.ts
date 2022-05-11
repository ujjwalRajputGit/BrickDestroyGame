
import { _decorator, Component, Node } from 'cc';
import { ScreenBase } from '../component/ScreenBase';
import { GameManager } from '../managers/GameManager';
const { ccclass, property } = _decorator;


@ccclass('GamePlayScreen')
export class GamePlayScreen extends ScreenBase {

    onShow(data: any) {
        console.log("data: ", data);

        if (data.isRestart)
            GameManager.instance.restartGame()
        else
            GameManager.instance.startGame()
    }
    onHide() {
    }

}