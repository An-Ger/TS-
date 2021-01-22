(function(){
    //抽象类不能用于创建对象，只能被继承
    //抽象类可以添加抽象方法
    abstract class Animal {
        name: string;
        age: number;
        constructor(name: string, age: number) {
          this.name = name;
          this.age = age;
        }
        //抽象方法不具体实现，但是子类必须实现
        abstract bark (): void;
      }
      class Dog extends Animal {
        bark() {
            console.log('Abstract Function');
        }
      }
    //   const test = new Animal();
})()