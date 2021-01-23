var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.sayHello = function () {
        console.log("hello");
    }; //方法以static开头则是静态方法，否则需要通过实例调用
    //属性前使用static可以定义静态属性，静态属性不需要创建类就可以使用
    Person.age = 19;
    return Person;
}());
var per = new Person();
console.log(Person.age);
per.sayHello();
