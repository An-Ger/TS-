class ScorePanel {
    score = 0;
    level = 1;
    scoreSpan: HTMLElement;
    levelSpan: HTMLElement;
    maxLevel: number;
    upScore: number;
    //没有传参数，默认值就是10
    constructor(maxLevel: number = 10, upScore: number = 10) {
      this.scoreSpan = document.getElementById("score");
      this.levelSpan = document.getElementById("level");
    }
    addScore() {
      this.score++;
      this.scoreSpan.innerHTML = this.score + "";
      if (this.score % this.upScore === 0) {
        this.levelUp();
      }
    }
    levelUp() {
      if (this.level < this.maxLevel) {
        this.level++;
        this.levelSpan.innerHTML = this.level + "";
      }
    }
  }
export default ScorePanel;  