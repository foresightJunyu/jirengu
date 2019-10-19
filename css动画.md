## CSS 动画总结

### CSS 动画原理

图片快速连续的变化构成了动画

每一幅静止画面被称作帧
每秒 24 帧（影视）
每秒 30-120 帧（游戏）

使用 setInterval 和 id.style.left 可以使 id 元素按照设置的时间移动，从而构成动画。

最后使用 clearInterval 清除定时器。

### 浏览器渲染原理

JS / CSS > 样式 > 布局 > 绘制 > 合成

更新方式根据不同的 JS / CSS 操作省略其中的步骤

更新方式根据浏览器的不同省略其中的步骤

### transform

因为 left 操作在所有浏览器中都走了一遍所有流程，导致渲染效率低下，所以并不推荐使用 left 制作 CSS 动画，而使用 transform （变形）。

transform 并没有 repaint (重新绘制)，跳过 layout 和 paint，只需要 composite。

#### transform - translate(位移)

```
transform: translateX(10px);
transform: translateY(10px);
transform: translateZ(10px);
transform: translate(10px, 50%, 100px);
```

translateZ 需要在父元素定义 perspective 属性，意思是视点距离视图中间位置的距离。

水平垂直居中的套路
https://jsbin.com/nixovusoqe/edit?html,css,output

transform - scale(缩放)
https://jsbin.com/sahalotivo/1/edit?html,css,output
用的较少，容易出现模糊

transform - rotate(旋转)
以垂直于屏幕的轴为起点开始转动
https://jsbin.com/kezidizoro/edit?html,css,output

一般用于 360 度旋转制作 loading

#### transform - skew(倾斜)

```
transform: skewX(-15deg);
transform: skewY(15deg);
transform: skew(-15deg, 15deg);
```

不常用

所有属性都可以组合使用

`transform: scale(1.5) rotate(1.5turn) skew(-15deg, 15deg);`

#### 应用

使用 transform 和 transition 实现一颗移入跳动的心
https://jsbin.com/gogomoxero/1/edit?html,css,output

#### transition （过渡）

作用是补充中间帧

transition: 属性名 时长 过渡方式 延迟

可以用逗号分隔两个不同的属性

`transition: left 200ms, top 400ms`

#### 过渡方式

- linear 线性
- ease 非线性
- ease-in 淡入
- ease-out 淡出

推荐使用 visibility 属性。

#### Animation 动画

语法
animation: 时长 过渡方式 延迟 次数 方向 填充模式 是否暂停 动画名

@keyframe 语法

例子：

- 循环移动的方块
  https://jsbin.com/kufiheluve/edit?html,css,output
- Animation 实现红心
  https://jsbin.com/jugoyayuje/1/edit?html,css,output
