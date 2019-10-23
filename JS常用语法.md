## JS 常用语法

### 表达式和语句

表达式：

```Javascript
1 + 2
// 表达式的值是 3
add(1, 2)
// 表达式的值为函数的返回值
console.log
// 表达式的值为函数本身
console.log(3)
// 表达式的值为 undefined
```

语句：

`var a = 'hello'`
区别：

- 表达式一般都有值，语句可能有也可能没有
- 语句一般会改变环境（声明、赋值）
- 以上不绝对

### 标识符的规则

规则：

- 第一个字符，可以是 Unicode 字母或 \$ 或 \_ 或中文
- 后面字符除了上面说的，还可以是数字
- 变量名是标识符

### if else 语句

```Javascript
if (a === 10) {
console.log('如果 a 与 10 相等，这里会执行')
} else {
console.log('a 与 10 不相等')
}

// 注意：“=”是赋值，“===”是逻辑判断
```

形如“如果条件成立执行 a 不然执行 b”的语句，可以写成三元表达式（条件运算符）的形式，以上用三元表达式表示为：

`a === 10 ? console.log('如果 a 与 10 相等，这里会执行') : console.log('a 与 10 不相等')`

### while for 语句

JavaScript 中的循环方法

```Javascript
while(a < 10) {
console.log('如果 a < 10 则这句被打印')
a = a + 1 // 此条语句保证每次循环之后改变 a 的值，不然会重复循环直到消耗掉所有内存
}
```

for 循环是 while 循环的语法糖：

```Javascript
for(var i = 0; i < 10; i++) {
console.log('如果 a < 10 则这句被打印')
}
```

注意： for 循环中的 var 声明 和 let 声明经常会作为面试题

```Javascript
for (var i = 0; i < 5; i++) {

}
console.log('i', i)
// i 是 5

for(let i = 0; i < 5; i++) {

}
console.log('i', i)
//ReferenceError: i is not defined

for (var i = 0; i < 5; i++) {
setTimeout(() => {
console.log('i', i)
}, 100)
}
// 打印出 5 个 i 5

for (let i = 0; i < 5; i++) {
setTimeout(() => {
console.log('i', i)
}, 100)
}
// 打印出 i 0 / i 1 / i 2 / i 3 / i 4
```

### break contine

在循环中， break 表示彻底跳出循环， continue 表示跳出单次循环。

```Javascript
for (var i = 0; i < 10; i++) {
if (i % 2 === 1) {
break;
}
}
console.log('i', i)
// 打印出 i 1

for (var i = 0; i < 10; i++) {
if (i % 2 === 1) {
continue;
} else {
console.log('i', i)
}
}
// 打印出 0 2 4 6 8
```

### label

label(标签),相当于定位符，用于跳转到程序的任意位置，格式如下：

```
label:
语句
```

标签可以是任意的标识符，但不能是保留字，语句部分可以是任意语句。

标签通常与 break 语句和 continue 语句配合使用，跳出特定的循环。

```Javascript
top:
for (var i = 0; i < 3; i++){
for (var j = 0; j < 3; j++){
if (i === 1 && j === 1) break top;
console.log('i=' + i + ', j=' + j);
}
}
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0
```

上面代码为一个双重循环区块，break 命令后面加上了 top 标签（注意，top 不用加引号），满足条件时，直接跳出双层循环。如果 break 语句后面不使用标签，则只能跳出内层循环，进入下一次的外层循环。

标签也可以用于跳出代码块。

```Javascript
foo: {
console.log(1);
break foo;
console.log('本行不会输出');
}
console.log(2);
// 1
// 2
```
