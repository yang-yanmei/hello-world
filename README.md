# hello-world
参考来源：<a href="http://wwsun.github.io/posts/react-with-es6-part-1.html">http://wwsun.github.io/posts/react-with-es6-part-1.html</a><br>
<h3><strong>工具说明</strong>：</h3>
<div style="text-indent:2px">
  <p>Babel V6</p>
  <p>Node v4</p>
  <p>Koa v1</p>
  <p>React v0.14(react and react-dom)</p>
  <p>Webpack v1.12</p>
</div>  
<p>Babel是一个通用的多用途JavaScript编译器，借助Babel你可以将ES6甚至ES7代码转义为ES5代码，此外Babel也能够用于转译React代码，并且这也是REact官方锁推荐的。</p>
<p>Webpack非常容易操作，他是一个模块合并的工具，本质就是一个能够把各种组件（HTML，CSS，js）构建成项目。最方便的是你只需要初始化配置一次，Webpack会替你做那些繁琐的事情，同事也保证了让你可以在项目中混合使用各种技术而不头疼。</p>
<br>

<h3><strong>项目结构：</strong></h3>
<div style="text-indent:2px;">
  <p>+build 客户端代码的构建结果目录</p>
  <p> +config 配置信息目录</p>
  <p>+lib    服务端库文件</p>
    <p style="text-indent:2px;"> -render.js渲染脚本</p>
  <p>+src    客户端源代码存放目录</p>
  <p>+test   测试文件目录</p>
  <p> -index.js 服务器脚本</p>
</div  
<br>
<h3><strong>准备开发环境:</strong><h3>
<p>构建一个简单的koa服务器</p>
  <p style="text-indent:2px:">安装相关依赖：</p>
  <div style="text-indent:4px:">
    <p>koa</p>
    <p>koa-logger</p>
    <p>koa-route</p>
    <p>koa-static</p>
    <p>co-views</p>
    <p>swig</p>
  </div>
  <p style="text-indent:2px:">Babel动态编译代码</p>
    <div style="text-indent:4px:">
      <p>babel-cli</p>
      <p>babel-preset-es2015-node5</p>
    </div>  
    <br>
    <br>
测试及启动
使用npm run watch启动webpack-dev-server
使用npm start启动服务器
打开浏览器访问http://localhost:3000查看结果
    
