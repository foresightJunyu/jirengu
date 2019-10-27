## JS 执行时机情况分析

eg1:为什么如下代码会打印 6 个 6

```Javascript
let i = 0
for(i = 0; i<6; i++){
  setTimeout(()=>{
    console.log(i)
  },0)
}
```

这跟 JS 函数的执行机制有关， 要知道 setTimeout 是一个异步的函数， 那么这段代码的执行就变成了， 先走完整个循环，这时 i 已经变成了 6，才开始执行 6 个 console.log(i)，所以最终只会打印出 6 个 6。

**换句话说， 函数什么时候开始调用，什么时候才开始查询参数的值。**

eg2:为什么此时是打印出 0、1、2、3、4、5

```Javascript
for(let i=0;i<6;i++){
    setTimeout(()=>{
        console.log(i)
    },0)
}
```

因为 js 要兼顾新手，所以特地照顾他们出了这样的逻辑

eg3.除了使用 for let 配合，还有什么其他方法可以打印出 0、1、2、3、4、5

```Javascript
for (var i = 0; i < 6; i++) {
  !(function(value) {
    setTimeout(() => {
      console.log(value);
    }, 0);
  })(i);
}

```

可以使用立即执行函数和闭包，当前的 i 当做 value 传入新的匿名函数，即可打印出正确结果
