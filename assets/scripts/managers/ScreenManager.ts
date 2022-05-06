
import { _decorator, Component, Node } from 'cc';
import { ScreenBase } from '../component/ScreenBase';
import { ScreenName } from '../global/GameConstants';
const { ccclass, property } = _decorator;

@ccclass('ScreenManager')
export class ScreenManager extends Component {

    @property({ type: [ScreenBase] })
    private screensList: ScreenBase[] = [];

    private currentScreen: ScreenName = ScreenName.None;

    onLoad() {
        if (!this.screensList.length)
            this.screensList = this.getComponentsInChildren(ScreenBase);
    }

    startScreen(screenName: ScreenName) {
        if (this.currentScreen === screenName)
            return;
        if (!this.screensList[screenName]) {
            console.error("provided screen name not present");
            return;
        }

        console.log("this.currentScreen", this.currentScreen);

        try {
            this.screensList[this.currentScreen].onHide();
        } catch (err) {
            console.error(err);
        }

        try {
            this.currentScreen = screenName;
            this.screensList[screenName].onShow();
        } catch (err) {
            console.error(err);
        }
    }
}