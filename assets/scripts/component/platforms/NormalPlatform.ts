
import { _decorator, Component, Node, Collider2D, IPhysics2DContact, RigidBody2D } from 'cc';
import { GameManager } from '../../managers/GameManager';
import { PlatformBase } from '../PlatformBase';
const { ccclass, property } = _decorator;


@ccclass('NormalPlatform')
export class NormalPlatform extends PlatformBase {

    @property(Number)
    hit: number;
    score: number;

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        console.log("hit");

        this.hit--;
        if (this.hit <= 0) {
            this.onPlatformDestory();
        }
    }

    onPlatformDestory() {
        GameManager.instance.onPlatformDestory(this.score);

        // TODO: without timeout throwing error, find out why error happening 
        setTimeout(() => {
            this.node.destroy();
        }, 100);
    }

}