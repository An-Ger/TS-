class Dog {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        //this表示当前对象
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log(this.age, this.name);
    }
}
const dog = new Dog("tom", 10);
dog.bark();
