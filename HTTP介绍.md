## HTTP 介绍

### HTTP 请求
HTTP 请求由请求行，请求头部，空行和请求数据四个部分组成。

在终端中执行以下命令：
`curl -X POST -d "1234567890" -s -v -H "Frank: xxx" -- "https://www.baidu.com"`

请求内容为：
```
1  POST / HTTP/1.1
2  Host: www.baidu.com
3  User-Agent: curl/7.54.0
4  Accept: */*
5  Frank: xxx
6  Content-Length: 10
7  Content-Type: application/x-www-form-urlencoded
8
9  1234567890
```
第一行为`请求行`，包括请求的方法，URI和 HTTP 版本。2-7行为`请求头部`为key-value形式，标识产生请求的浏览器类型，主机地址等信息。第8行为`空行`，通知服务器以下不再有请求头。第九行为`请求数据`。

### 在Chrome中查看请求
1. 按F12
2. 点击Network
3. 点击想要查看的请求
4. 找到Request Header，点击view source
5. 然后就可以看到请求的前三部分
6. 如果有请求的第四部分，那么在 Form Data 或 Payload 里可以看到

### HTTP 响应 
HTTP 响应也由四个部分组成，分别是：`状态行`，`消息报头`，`空行`和`响应正文`。

![](https://www.stayw1thme.xyz/usr/uploads/2019/08/883450118.jpg)

消息报头中的Content-Type标注了响应正文的格式并遵循MIME规范。

### 在Chrome中查看响应
1. 按F12
2. 点击Network
3. 点击你想要的查看的响应
4. 查看 Response Headers，点击view source
5. 你会看到响应的前三部分
6. 查看 Response 或者 Preview，你会看到响应的第四部分

### curl命令简介

参数 | 含义| 示例
--|--|--
-X | 指定方法，如POST,DELETE |`curl -I -X DELETE https://api.github.cim`
-d | 发送带参数的请求(默认是post方式提交) | `curl -X POST -d "1234567890" -s -v -H "Frank: xxx" -- "https://www.baidu.com"`
-H | 设置请求头参数| 同上
-s | 不输出统计信息| 同上
-v |显示一次 http 通信的整个过程，包括端口连接和 http request 头信息等|同上
-I |显示 http response 的头信息，而不包含响应内容|`curl  -I  "https://www.baidu.com"`
-i |显示 http response 的头信息，同时包含响应内容|`curl  -i  "https://www.baidu.com"`

### URL和URI
* URI(Uniform Resource Identifier)
* URL(Uniform Resource Locater)

URL是URI的子集，中文名称为统一资源定位符。它标识了互联网上每个文件的位置以及处理方式。
#### URL的组成
例如：`https://www.baidu.com/s?wd=hello&rsv_spt=1#1`

`https` 为超文本传输协议，两个电脑之间传输内容的协议 。也就是说前面的http 或者 https指的是协议

`www.baidu.com` 域名

`/s` 路径， https://www.baidu.com 这个网址默认会有一个 /的路径

`wd=hello&rsv_spt=1` 查询参数 ，可以点击 https://www.baidu.com/s?wd=hi&rsv_spt=1#1 会发现变成了在百度hi的内容

`#1` 锚点 ， 将网站#1 变为 #3 ，点击 https://www.baidu.com/s?wd=hello&rsv_spt=1#3 会发现直接显示在第一行的是该搜索项网页的第三个链接 ，多次修改#后面的数字就会明白了

`:80` 其实这个网址还有一个端口号，http协议的服务端口号就是对应的80。https://www.baidu.com/s?wd=hello&rsv_spt=1#1:80 这个网址的效果和 https://www.baidu.com/s?wd=hello&rsv_spt=1#1 是一样的。
#### URL与URI的区别
URL和URI都定义了 what the resource is。而URL还定义了how to get the resource。

一个网址` http://www.xxx.com/dir/filename.html` 中 `/dir/filename.html` 就是uri。而整个连接又是url，url包含了指定什么协议（`http`），在哪个站点（`http://www.xxx.com`）获得什么资源（`/dir/filename.html`）

