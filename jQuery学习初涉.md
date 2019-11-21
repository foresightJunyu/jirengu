### jQuery

jQuery 毫无疑问是 JS 历史上最经典的 js 库，直至今日，很多网站依然在使用 jQuery 它的许多思想值得我们开发者学习，但是想要掌握它也并不容易，经典的思想有哪些呢？

#### jQuery 如何获取元素
基本选择器
```Javascript
$('h2') //标签选择器
$('.test') // 类选择器
$('#demo') // id选择器
$('h2, .test') //并集选择器
$('h2.test') //交集选择器
$('*') // 全局选择器
```
层次选择器
```Javascript
$('#menu span') // 选择menu下的所有span标签
$('#menu>span') // 选择menu下的子元素span
$('h2 + dl') // 选择h2之后的同辈元素
$('h2 ~ dl') //选择h2之后的所有同辈元素
```
#### jQuery的链式操作
jQuery 设计思想之一，就是最终选中网页元素以后，以链条的形式写出来并操作，原因是：1. jQuery是可以可以返回对象的函数  2. 对象的方法可以通过return this 返回对象本身从而实现链式操作。
```Javascript
$('div').find('h3').eq(2).html('Hello');
```
#### jQuery创建元素
创建元素非常的简单只需要将元素直接传如 jQuery 的构造函数中就可以例如：
```Javascript
$("<div>创建一个新的div</div>"); //创建一个新的div
$("ul.first").append.$("<li>new li</li>"); //创建一个新的li插入class为first的ul中
```
#### jQuery移动元素

想把一个元素移动到另一个元素前面有两种方法。

第一种方法是 insertAfter()，把 div 元素移动 p 元素后面。
`$("div").insertAfter($("p"));`
第二种方法是 after()，把 p 元素加到 div 元素前面。
`$("p").after($("div"));`
这两种方法是有区别的,第一种方法返回的是 div 元素，第二种方法返回的是 p 元素

这种移动又有四种：
```Javascript
.insertAfter()和.after() //在现存元素的外部，从后面插入元素

.insertBefore()和.before()//在现存元素的外部，从前面插入元素

.appendTo()和.append()//在现存元素的内部，从后面插入元素

.prependTo()和.prepend() //在现存元素的内部，从前面插入元素

```
#### jQuery 修改元素的属性
jQuery 中修改一个元素的属性用到了适配器

适配器就是根据参数数量的变化而执行不同的操作

```Javascript
$("div.x").attr("color", "red"); //修改class为x的div元素的color属性为红色
$("div.x").attr("color"); //获取class为x的div元素的color属性
```

#### jQuery 中的设计模式

- 不用new的构造函数
- $(支持多种参数) 重载
- 用闭包隐藏细节
- $div.text()既可以读也可以写 getter/setter
- $.fn 是 $.prototype 的别名
- jQuery针对不同浏览器使用不同代码，这叫适配器








