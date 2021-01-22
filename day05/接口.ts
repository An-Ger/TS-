(function(){
    //接口用来定义一个类的结构
    interface myInterface {
        name: string;
        age: number;
    }
    //定义一个类中包含那些属性和方法
    //接口可以重复声明
    interface myInterface {
        gender: string;
    }
    //重复声明的接口是累加的
    const obj: myInterface = {
        name: 'bo',
        age: 11,
        gender: 'male'
    }
    //接口中所有的属性都不能有实际值，方法只能是抽象方法
    //抽象类中可以有具体方法和属性
    interface myInter {
        name: string;
        sayHello(): void;
    }
    class test implements myInter {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        sayHello() {
            console.log(123);
        }
    }
})()