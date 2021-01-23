class Person {
  //属性前使用static可以定义静态属性，静态属性不需要创建类就可以使用
  static age: number = 19;
  //直接定义的属性是实例属性，需要通过对象的实例去使用
  name: string;
  readonly height: number;//表示一个只读属性
  sayHello () {
      console.log("hello");
      
  }//方法以static开头则是静态方法，否则需要通过实例调用
}
const per = new Person();
console.log(Person.age);
per.sayHello();