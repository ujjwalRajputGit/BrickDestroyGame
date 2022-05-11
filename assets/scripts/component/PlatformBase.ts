
import { _decorator, Component, Contact2DType, PhysicsSystem2D, Collider2D, IPhysics2DContact } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlatformBase')
export abstract class PlatformBase extends Component {

    private collider: Collider2D;

    start() {
        this.collider = this.getComponent(Collider2D);
        if (!this.collider)
            console.error("collider not found");
        this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    }

    abstract onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null);
}