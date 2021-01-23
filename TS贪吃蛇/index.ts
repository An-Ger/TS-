import GameControl from './model/GameControl'
const gc = new GameControl();
setInterval(() => {
    console.log(gc.direction);
    
}, 1000)