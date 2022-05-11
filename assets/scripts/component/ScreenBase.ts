
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('ScreenBase')
export abstract class ScreenBase extends Component {

    abstract onShow(data: any);
    abstract onHide();

}