(function () {
  class Dog {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    bark() {
      console.log(this.age);
    }
  }
  const dog = new Dog("fuck", 190);

  class Cat {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    bark() {
      console.log("miao");
    }
  }
  const cat = new Cat("sd", 12);

  class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    bark() {
      console.log(this.name);
    }
    sayHello () {
        console.log(1);
        
    }
  }
  //使用继承，子类会拥有父类所有方法和属性
  //通过继承可以把共同代码写在一个父类
  //子类也可以添加父类中没有的方法
  class mice extends Animal {
    //子类方法会覆盖父类方法，重写
    bark() {
      console.log("fucklasd");
    }
    run() {
      console.log("run");
    }
    sayHello () {
        //super就代表父类，使用super可以引用父类实例
        super.sayHello();
    }
  }
  class ace extends Animal {
      //如果子类重写构造函数，子类构造函数必须对父类构造函数调用
      constructor(name: string, age: number) {
          super(name, age);
          this.name = name;
      }
  }
  const b = new mice("sd", 90);
  b.bark();
  b.run();
})();
