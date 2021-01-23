(function () {
  class Food {
    element: HTMLElement;
    constructor() {
      this.element = document.getElementById("food")!; //!表示不会为空
    }
    get X() {
      return this.element.offsetLeft;
    }
    get Y() {
      return this.element.offsetTop;
    }
    change() {
        //位置最小是0，最大是290，必须是整⑩
        let left = Math.round(Math.random() * 29 ) * 10;
        let top = Math.round(Math.random() * 29 ) * 10;
        this.element.style.left = left + "px"
        this.element.style.top = top + "px"
    }
  }
  const f = new Food();
  console.log(f.X, f.Y);
  f.change();
  console.log(f.X, f.Y);
  
})();
