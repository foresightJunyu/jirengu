## JS 对象基本用法

### 声明对象的两种语法

- `var obj = new Object({name: 'twoheart', gender: 'male'})`
- `var obj2 = {name: 'twoheart', gender: 'male'}`
  注意：

1. key 是字符串，不是标识符
2. 如果省略括号，则必须写标识符
3. 就算省略了括号，依然是字符串形式

### 如何删除对象的属性

#### delete

```Javascript
var obj = {
name: 'twoheart',
gender: 'male'
}
delete obj.gender
delete obj['gender']
var hello = 'name'
delete obj[hello]
// delete 语法的三种使用方式
```

#### 判断 key 是否存在于 obj 中

`'gender' in obj`

#### undefined

使 obj.name = undefined 并不能使属性被删除，也不能以此为依据判断 key 是否存在于 obj 中

### 如何查看对象的属性

#### 查看自身所有 key

```
Object.keys(obj)
// ["name", "gender"] 还有 __proto__:Array
```

#### 查看自身所有属性

```
console.dir(obj)
// {name: 'lichen', gender: 'male'} 还有 __proto: Object
```

#### 判断属性是自身还是共有的

```
obj.hasOwnProperty('name') // 是，返回 true
obj.hasOwnProperty('toString') // 否，返回 false
```

### 如何修改或增加对象的属性

#### 直接赋值

如果 obj 中存在则修改，如果不存在则增加

```Javascript
obj.name = 'lichen'
obj.age = '19'
var age = 'height'
obj[age] = '180'
obj['age'] = '19'
// 注意上下两种不同，上面是变量 age, 实际是 {height: '180'}
```

#### 批量赋值

```
Object.assign(obj, {age: '18', height: '169', hobby: 'play game'})
// {name: "lichen", gender: "male", height: "169", age: "18", hobby: "play game"}
```

### 修改（根）原型共有属性

1. 无法直接修改共有属性

```Javascript
obj.toString = 'hello'
// 这将只能修改本身的 toString 属性
var obj2 = {name: 'john'}
obj2.toString()
//"[object Object]"
```

2. 通过原型修改

```Javascript
obj.**proto**.toString = 'hello' // 不推荐
obj.prototype.toString = 'hello' // 推荐
```

一般来说不应该修改原型上的属性

### 修改隐藏属性

```Javascript
let common = {kind: 'human'}

let obj = Object.create(common)

Object.assign(obj, {name: 'lichen', hair: 'black'})
```

注意：应该在创建对象时创建隐藏属性

### ‘name’ in obj 和 obj.hasOwnProperty(‘name’) 的区别

'name' in obj 无论 name 是自身属性还是原型中的属性都会检测，如果任何地方有都会显示 true。
obj.hasOwnProperty('name') 只检查自身有没有 name 属性，如果没有则为 false，不管原型上是否有该属性。
