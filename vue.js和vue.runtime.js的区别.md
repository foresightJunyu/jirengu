### vue.js和vue.runtime.js的区别
vue有两个版本，完整版 vue.js和vue.min.js，非完整版也叫运行时版 vue.runtime.js和vue.runtime.min.js

#### 两者的区别

- 完整版有HTML compiler(编译器)，比非完整版体积大40%
- 完整版写在HTML中或者写在template选项中，非完整版写在render函数中
- vue@cli默认引入的是非完整版，推荐使用的也是非完整版。这样用户下载的js体积更小保证用户体验。我们在写代码的时候可以直接在vue文件里写HTML标签，而不写h函数，而vue-loader会帮我们把vue文件里的HTML转为h函数

#### render用法
```javascript
import Demo from "./Demo.vue"
new Vue({
    el:'#app',
    render(h){
        return h(Demo)
    }
});
```
#### template用法
```javascript
new Vue({
  el: '#app',
  template: `
    <div>{{n}}</div>
  `,
  data: {
    n: 0
  }
})
```