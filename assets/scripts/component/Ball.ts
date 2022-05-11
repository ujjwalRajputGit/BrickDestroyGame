
import { _decorator, Component, RigidBody2D, v2, Collider2D, Contact2DType, IPhysics2DContact, Vec2, v3 } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('Ball')
export class Ball extends Component {

    private rigidBody: RigidBody2D;
    private initialUnitVector: Vec2;
    private ballVelocity: number;

    init(ballVelocity: number) {
        this.rigidBody = this.getComponent(RigidBody2D);
        const collider = this.getComponent(Collider2D);
        collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);

        this.node.setPosition(v3(0, 0, 0));
        this.node.active = true;
        this.ballVelocity = ballVelocity;
        // this.initialUnitVector = v2(Math.random() + 0.1, Math.random()).normalize();
        this.initialUnitVector = v2(0.1, 0.9).normalize();
        this.setVelocity(ballVelocity, this.initialUnitVector);
    }

    changeBallVelocity(ballVelocity: number) {
        this.ballVelocity = ballVelocity;
    }

    changeBallVelocityByPercent(ballVelocity: number) {
        this.ballVelocity += this.ballVelocity * ballVelocity / 100;
    }

    onResume() {
        this.setVelocity(this.ballVelocity, this.initialUnitVector.multiply2f(-1, -1));
    }

    onPause() {
        this.setVelocity(0, v2(0, 0,));
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        this.setVelocity(this.ballVelocity, contact.getWorldManifold().normal);
    }

    setVelocity(velocity: number, direction: Vec2) {
        const reflectedUnitVector = this.getReflectedVector(direction.normalize());
        this.rigidBody.linearVelocity = v2(reflectedUnitVector.x * velocity, reflectedUnitVector.y * velocity);
        this.initialUnitVector = reflectedUnitVector;
    }

    getReflectedVector(normalizeNormal: Vec2): Vec2 {
        const dot = 2 * Vec2.dot(this.initialUnitVector, normalizeNormal);
        const tmp = v2(normalizeNormal.x * dot, normalizeNormal.y * dot);
        return this.initialUnitVector.subtract(tmp);
    }


}