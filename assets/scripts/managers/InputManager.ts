
import { _decorator, Component, Node, EventTouch } from 'cc';
import { Paddle } from '../component/Paddle';
const { ccclass, property } = _decorator;

@ccclass('InputManager')
export class InputManager extends Component {
    @property(Node)
    inputNode: Node;
    @property(Paddle)
    paddle: Paddle;

    private inputEnable = false;

    onEnable() {
        this.inputNode.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }

    onTouchMove(e: EventTouch) {
        if (this.inputEnable)
            this.paddle.moveTo(e.getUILocation());
    }

    onDisable() {
        this.inputNode.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }

    onPause() {
        this.inputEnable = false;
    }

    onResume() {
        this.inputEnable = true;
    }
}