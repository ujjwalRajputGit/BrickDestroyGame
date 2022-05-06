
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('ScreenBase')
export class ScreenBase extends Component {

    onShow() { this.node.active = true };
    onHide() { this.node.active = false };

}