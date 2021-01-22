(function(){
    class Person {
        //属性前可以添加修饰符，防止修改
        //public修饰的属性可以任意修改，默认值就是public
        public _name: string;
        public _age: number;
        //private私有属性,只能在类中访问
        private _gender: string;
        constructor (name: string, age: number) {
            this._name = name;
            this._age = age;
        }
        //通过方法访问私有属性
        getGender () {
            return this._gender;
        }
        setGender (gender: string) {
            //可以判断传入的值是否合法
            this._gender = gender;
        }
        //TS中设置getter方法的方式
        get name(){
            console.log("get name执行了");
            return this._name;
        }
        set name(name: string) {
            this._name = name;
        }
    }
    const per = new Person('sss', 90);
    console.log(per.setGender("male"));
    console.log(per.name);
    per.name = "???";
    console.log(per.name);
    
    class A {
        num: number;//默认为public，可以在任意位置访问
        //private不可以在子类访问
        //protected受保护的属性，可以在父类和子类中访问
        protected age: number;
        constructor(num: number) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    class C {
        constructor(public name: string, public age: number) {
            //属性可以直接声明在构造函数中
        }
    }
    //属性name和age都可以任意修改,会导致数据不安全
})()