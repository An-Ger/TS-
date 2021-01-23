class Snake{
    head: HTMLElement;
    bodies: HTMLCollection;//会自动刷新，HTML集合
    element: HTMLElement;
    constructor(){
        this.element = document.getElementById('snake');
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = this.element!.getElementsByTagName('div')
    }
    get X(){
        return this.head.offsetLeft;
    }
    get Y(){
        return this.head.offsetTop;
    }
    set X (value: number){
        if(this.X === value) return;
        if(value < 0 || value > 290) {
            throw new Error('撞墙了');
        }
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
            if(value > this.X){
                //大于证明在向右走
                value = this.X - 10;
            }
            else{
                value = this.X + 10;
            }
        }
        if(value < 0 || value > 290) {
            throw new Error('撞墙了');
        }
        this.moveBody();
        this.checkedBody();
        this.head.style.left = value + 'px'
    }
    set Y (value: number){
        if(this.Y === value) return;
        if(value < 0 || value > 290) {
            throw new Error('撞墙了');
        }
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
            if(value > this.Y){
                //大于证明在向右走
                value = this.Y - 10;
            }
            else{
                value = this.Y + 10;
            }
        }
        this.moveBody();
        this.checkedBody();
        this.head.style.top = value + 'px'
    }
    addBody(){
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }
    moveBody(){
        //从后向前修改身体坐标
        for(let i = this.bodies.length - 1; i > 0; i--) {
            let x = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            (this.bodies[i] as HTMLElement).style.left = x + 'px';
            (this.bodies[i] as HTMLElement).style.top = screenY + 'px';
        }
    }
    checkedBody(){
        for(let i = 0; i < this.bodies.length; i++) {
            if(this.X === (this.bodies[i] as HTMLElement).offsetLeft && this.Y === (this.bodies[i] as HTMLElement).offsetTop)  {
                throw new Error("撞到自己了")
            }
        }
    }
}
export default Snake;