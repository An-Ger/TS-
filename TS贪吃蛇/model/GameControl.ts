import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";
class GameControl {
  //定义三个属性
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  direction: string = "Right";
  isLive: boolean = true; //生存

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();
    this.init();
  }
  init() {
    //绑定按键事件
    document.addEventListener("keydown", this.keydownHandler.bind(this));
    this.run();
  }
  keydownHandler(event: KeyboardEvent) {
    //检查值是否合法，用户是否按了正确的按键
    this.direction = event.key;
  }
  run() {
    let X = this.snake.X;
    let Y = this.snake.Y;
    switch (this.direction) {
      case "Up":
        Y -= 10;
        break;
      case "Down":
        Y += 10;
        break;
      case "Left":
        X -= 10;
        break;
      case "Right":
        X += 10;
        break;
    }
    this.checkEat(X, Y);
    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (e) {
      alert(e.message);
      this.isLive = false;
    }
    this.isLive &&
      setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }
  checkEat(x: number, y: number) {
    if (x === this.food.X && y === this.food.Y) {
      this.food.change();
      this.scorePanel.addScore();
      this.snake.addBody();
    }
  }
}
export default GameControl;
