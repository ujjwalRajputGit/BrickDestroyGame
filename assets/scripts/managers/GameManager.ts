
import { _decorator, Component, Node } from 'cc';
import { Ball } from '../component/Ball';
import { InitialBallVelocity, ScreenName } from '../global/GameConstants';
import { InputManager } from './InputManager';
import { LevelManager } from './LevelManager';
import { ScoreManager } from './ScoreManager';
import { ScreenManager } from './ScreenManager';
const { ccclass, property } = _decorator;


@ccclass('GameManager')
export class GameManager extends Component {

    @property(ScreenManager)
    screenManager: ScreenManager;
    @property(ScoreManager)
    scoreManager: ScoreManager;
    @property(InputManager)
    inputManager: InputManager;
    @property(LevelManager)
    levelManager: LevelManager;
    @property(Ball)
    ball: Ball;

    private isPaused = false;
    private totalBricksDestroyedCount: number = 0;

    private static _instance: GameManager;
    public static get instance() {
        return GameManager._instance;
    }

    onLoad() {
        GameManager._instance = this;
    }

    startGame() {
        this.levelManager.generateNextLevel();
        this.ball.init(InitialBallVelocity)
        this.inputManager.onResume();
    }

    restartGame() {
        this.levelManager.generateCurrentLevel();
        this.ball.init(InitialBallVelocity)
        this.inputManager.onResume();
    }

    onPlatformDestory(scoreGain: number) {
        this.scoreManager.gainScore(scoreGain);
        this.totalBricksDestroyedCount++;
        if (this.totalBricksDestroyedCount >= this.levelManager.totalDestroableBrick()) {
            this.onPause();
            setTimeout(() => {
                this.startGame();
            }, 2000);
        }
    }

    changeBallVelocity(ballVelocity: number) {
        this.ball.changeBallVelocity(ballVelocity);
    }

    changeBallVelocityByPercent(ballVelocity: number) {
        this.ball.changeBallVelocityByPercent(ballVelocity);
    }

    onPause() {
        this.isPaused = true;
        this.ball.onPause();
        this.inputManager.onPause();
    }

    onResume() {
        this.isPaused = false;
        this.ball.onResume();
        this.inputManager.onResume();
    }

    onGameOver() {
        this.onPause();
        this.screenManager.startScreen(ScreenName.ResultScreen, { totalScore: this.scoreManager.getTotalScore() });
    }

    onTogglePauseResume() {
        if (this.isPaused)
            this.onResume()
        else
            this.onPause();
    }

}