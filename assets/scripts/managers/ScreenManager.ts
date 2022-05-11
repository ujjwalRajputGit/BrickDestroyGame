
import { _decorator, Component, Node } from 'cc';
import { ScreenBase } from '../component/ScreenBase';
import { ScreenName } from '../global/GameConstants';
const { ccclass, property } = _decorator;

@ccclass('ScreenManager')
export class ScreenManager extends Component {

    @property({ type: [ScreenBase] })
    private screensList: ScreenBase[] = [];

    private currentScreen: ScreenName = ScreenName.None;

    startScreen(screenName: ScreenName, data?: any) {
        if (this.currentScreen === screenName)
            return;
        if (!this.screensList[screenName]) {
            console.error("provided screen name not present");
            return;
        }

        console.log("this.currentScreen", this.currentScreen);
        console.trace()
        if (this.screensList[this.currentScreen]) {
            this.screensList[this.currentScreen].onHide();
            setTimeout(() => {
                this.screensList[this.currentScreen].node.active = false;
                this.currentScreen = screenName;

                if (this.screensList[screenName]) {
                    this.screensList[screenName].node.active = true;
                    this.screensList[screenName].onShow(data);
                }
            }, 500);
        }
        else {
            this.currentScreen = screenName;

            if (this.screensList[screenName]) {
                this.screensList[screenName].node.active = true;
                this.screensList[screenName].onShow(data);
            }
        }

    }
}