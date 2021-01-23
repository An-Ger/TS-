"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameControl_1 = require("./model/GameControl");
var gc = new GameControl_1.default();
setInterval(function () {
    console.log(gc.direction);
}, 1000);
