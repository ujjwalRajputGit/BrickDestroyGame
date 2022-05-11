
import { _decorator, Component, Node, Collider2D, IPhysics2DContact } from 'cc';
import { GameManager } from '../../managers/GameManager';
import { PlatformBase } from '../PlatformBase';
const { ccclass, property } = _decorator;

@ccclass('BallDestroyerPlatform')
export class BallDestroyerPlatform extends PlatformBase {

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact) {
        GameManager.instance.onGameOver();
    }
}