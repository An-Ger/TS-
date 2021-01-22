(function () {
  function fn(a: number): number {
    return a;
  } //不清楚返回的类型，尽可能不适用any关闭类型检测，可以使用泛型
  //自定义函数或者类的时候，如果遇到不确定类型的时候可以返回泛型
  //泛型就是一个不确定的类型
  function fn2<T>(num: T): T {
    return num;
  }
  //可以直接调用具有泛型的函数
  let res1 = fn2(10); //不指定泛型可以自行进行推断
  let res2 = fn2<string>("hello");
  function fn3<T, K>(a: T, b: K) {
    console.log(b);
    return a;
  }
  //泛型可以同时指定多个
  fn3<number, string>(1234, "hello");
  //限制泛型的类型
  interface Inter {
    length: number;
  }
  //泛型可以实现interface，或者一个类
  function fn4<T extends Inter>(a: T): number {
    return a.length;
  }
  class MyClass <T> {
      name: T;
      constructor(name: T) {
          this.name = name;
      }
  }
  const mc = new MyClass<string>("bob");
})();
