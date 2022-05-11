
import { _decorator, Component, Node, Collider2D, IPhysics2DContact } from 'cc';
import { PlatformBase } from '../PlatformBase';
const { ccclass, property } = _decorator;

@ccclass('NonDestroablePlatform')
export class NonDestroablePlatform extends PlatformBase {

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact) {

    }

}