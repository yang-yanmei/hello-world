# hello-world
参考来源：<a href="http://wwsun.github.io/posts/react-with-es6-part-1.html">http://wwsun.github.io/posts/react-with-es6-part-1.html</a><br>
工具说明：<br>
  &nbsp;&nbsp;&nbsp;&nbsp;Babel V6<br>
  &nbsp;&nbsp;&nbsp;&nbsp;Node v4<br>
  &nbsp;&nbsp;&nbsp;&nbsp;Koa v1<br>
  &nbsp;&nbsp;&nbsp;&nbsp;React v0.14(react and react-dom)<br>
  &nbsp;&nbsp;&nbsp;&nbsp;Webpack v1.12<br>
Babel是一个通用的多用途JavaScript编译器，借助Babel你可以将ES6甚至ES7代码转义为ES5代码，此外Babel也能够用于转译React代码，并且这也是REact官方锁推荐的。<br>
Webpack非常容易操作，他是一个模块合并的工具，本质就是一个能够把各种组件（HTML，CSS，js）构建成项目。最方便的是你只需要初始化配置一次，Webpack会替你做那些繁琐的事情，同事也保证了让你可以在项目中混合使用各种技术而不头疼。<br><br>

项目结构：<br>
&nbsp;&nbsp;&nbsp;&nbsp; +build 客户端代码的构建结果目录<br>
&nbsp;&nbsp;&nbsp;&nbsp; +config 配置信息目录<br>
&nbsp;&nbsp;&nbsp;&nbsp; +lib    服务端库文件<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -render.js渲染脚本<br>
&nbsp;&nbsp;&nbsp;&nbsp; +src    客户端源代码存放目录<br>
&nbsp;&nbsp;&nbsp;&nbsp; +test   测试文件目录<br>
&nbsp;&nbsp;&nbsp;&nbsp; -index.js 服务器脚本<br>
<br>
准备开发环境<br>
构建一个简单的koa服务器<br>
  &nbsp;&nbsp;安装相关依赖：<br>
  &nbsp;&nbsp;&nbsp;&nbsp;  koa<br>
  &nbsp;&nbsp;&nbsp;&nbsp;  koa-logger<br>
  &nbsp;&nbsp;&nbsp;&nbsp;  koa-route<br>
  &nbsp;&nbsp;&nbsp;&nbsp;  koa-static<br>
  &nbsp;&nbsp;&nbsp;&nbsp;  co-views<br>
  &nbsp;&nbsp;&nbsp;&nbsp;  swig<br>
  Babel动态编译代码<br>
  &nbsp;&nbsp;&nbsp;&nbsp;  babel-cli<br>
  &nbsp;&nbsp;&nbsp;&nbsp;  babel-preset-es2015-node5<br>
    <br>
    <br>
    <br>
测试及启动
使用npm run watch启动webpack-dev-server
使用npm start启动服务器
打开浏览器访问http://localhost:3000查看结果
    
