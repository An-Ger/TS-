(function () {
    var Food = /** @class */ (function () {
        function Food() {
            this.element = document.getElementById("food"); //!表示不会为空
        }
        Object.defineProperty(Food.prototype, "X", {
            get: function () {
                return this.element.offsetLeft;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Food.prototype, "Y", {
            get: function () {
                return this.element.offsetTop;
            },
            enumerable: false,
            configurable: true
        });
        Food.prototype.change = function () {
            //位置最小是0，最大是290，必须是整⑩
            var left = Math.round(Math.random() * 29) * 10;
            var top = Math.round(Math.random() * 29) * 10;
            this.element.style.left = left + "px";
            this.element.style.top = top + "px";
        };
        return Food;
    }());
    var f = new Food();
    console.log(f.X, f.Y);
    f.change();
    console.log(f.X, f.Y);
})();
