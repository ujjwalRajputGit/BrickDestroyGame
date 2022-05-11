
import { _decorator, Component, Node, Label } from 'cc';
import { ScreenBase } from '../component/ScreenBase';
import { ScreenName } from '../global/GameConstants';
import { GameManager } from '../managers/GameManager';
const { ccclass, property } = _decorator;

@ccclass('ResutScreen')
export class ResutScreen extends ScreenBase {

    @property(Label)
    scoreLabel: Label;

    onShow(data: any) {
        if (data.msg)
            this.scoreLabel.string = data.msg;
        else if (data.totalScore)
            this.scoreLabel.string = "Score: " + data.totalScore;
    }
    onHide() {
    }

    onRestartButtonClick() {
        GameManager.instance.screenManager.startScreen(ScreenName.GamePlay, { isRestart: true });
    }
}
