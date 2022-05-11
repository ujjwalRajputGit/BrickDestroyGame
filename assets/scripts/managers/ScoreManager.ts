
import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ScoreManager')
export class ScoreManager extends Component {

    @property(Label)
    scoreLabel: Label;

    private totalScore = 0;

    gainScore(scoreGain: number) {
        this.totalScore += scoreGain;
        this.updateUI();
    }

    getTotalScore() {
        return this.totalScore;
    }

    updateUI() {
        this.scoreLabel.string = 'Score: ' + this.totalScore;
    }
}