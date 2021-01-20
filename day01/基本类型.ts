let a: number; //a的类型是Number
a = 10;
// a = "string"; //不能声明为字符串
let b: string = "hello TypeScript";
let c: boolean = true;
//如果变量的声明和赋值是同时进行的，会自动进行变量检测
var d = false;
// d = 1;//报错
//TS 类型
//可以直接使用字面量进行赋值
let e: 10;
e = 10;
// e = 11直接报错，只能进行一次赋值
let f: "male" | "fales";
f = "male";
f = "fales";
// f = "helllo" 无法进行赋值，联合类型赋值
let g: string | boolean;
g = "hello";
g = true;
//any任意类型
let h: any;
h = 1;
h = "string";
h = true; //一个变量设置为any类型，相当于关闭ts类型检测,不建议使用any类型,声明变量时不指定类型，则隐式为any
//unknow未知类型，效果等同于any
let i: any;
let j: string = "hello";
j = i; //any类型可以赋值给任意变量
let k: unknown;
// j = k;报错，unknown类型无法直接赋值,unknow就是一个类型安全的any，无法直接赋值给其他变量
if (typeof j === "string") {
//   j = k;
}
j = k as string;//只有对类型进行判断之后，才可以吧unknown类型进行赋值,类型断言告诉解析器变量的实际类型
j = <string>k;//类型断言的另一种写法
//void, never主要用于函数的返回类型
 function fn(): void {
     //void表示空，没有返回值
 }
 function fn2(): never {
     //never表示永远不会返回结果,常用来报错
     throw new Error('error');//never用的比较少
 }

//object类型
let l: object;
l = {};
l = function () {};//object很少用
let m: {name: string, age?: number};//一般使用一个大括号,可以指定属性，表示b对象里面有一个name属性
// m = {}报错，因为必须有一个name属性
m = {name: "hello"};//属性名后加问号，表示属性可选
let n: {name: string, [props: string]: any}
//表示后面的属性可以添选,[props: string]: any表示任意类型的属性,表示对象必须有name属性，其他属性可以没有
n = {name: "fuck", age: "18", gender: "male"}; 
let o: (a: number, b: number) => number;//希望o是一个函数，函数有两个参数，而且类型都是number
o = function (a: number, b: number): number {
    return a + b;
}
//使用类似箭头函数方式，设置函数类型声明
//array类型
let p: string[];//表示字符串数组
p = ['a', 'b']
let q: number[];//数值数组
let r: Array<number>;//同上，数值数组
//数组的两种表达方式，Array<Type>, Type[]
//tuple元组，固定长度的数组
let s: [string, string];
s = ['hello', 'ts'];
// s= ['js']报错，固定长度为2
 //元组语法，[Type, Type, Type]
 //enum类型,枚举
 //数据库中尽可能减少存储空间占用，所以在可选类型有限的情况下可以使用枚举，比如说用0代替female，1代替male,枚举所有的可能情况
 enum Gender {
     male = 1,
     female = 0
 }
 let t: {name: string, gender: Gender};
 t = {
     name: '?',
     gender: 0
 }
 console.log(t.gender === Gender.female); //true
 let u: string & number;//表示同时，u两种类型都是，但是不可能满足情况,使用情况如下
 let v: {name: string} & {age: number};
 v = {name: "swk", age: 10};//必须同时有两种类型
 //类型别名
 type newType = string;//newType和string类型是等价的,可以使用newType代替string
 let y: newType = "hello ts";
 type newNewType = 1 | 2 | 3 | 4 | 5;
 let w: 1 | 2 | 3 | 4 | 5;
 let x: 1 | 2 | 3 | 4 | 5;
 //类型别名可以简化类型使用




