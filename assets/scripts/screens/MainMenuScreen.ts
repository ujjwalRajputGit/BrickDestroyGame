
import { _decorator, Component, Node } from 'cc';
import { ScreenBase } from '../component/ScreenBase';
import { ScreenName } from '../global/GameConstants';
import { GameManager } from '../managers/GameManager';
const { ccclass, property } = _decorator;


@ccclass('MainMenuScreen')
export class MainMenuScreen extends ScreenBase {

    onShow() {
    }
    onHide() {
    }

    onStartButtonClick() {
        GameManager.instance.screenManager.startScreen(ScreenName.GamePlay, { isRestart: false });
    }


}