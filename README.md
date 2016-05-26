# hello-world
工具说明：
  Babel V6
  Node v4
  Koa v1
  React v0.14(react and react-dom)
  Webpack v1.12
Babel是一个通用的多用途JavaScript编译器，借助Babel你可以将ES6甚至ES7代码转义为ES5代码，此外Babel也能够用于转译React代码，并且这也是REact官方锁推荐的。
Webpack非常容易操作，他是一个模块合并的工具，本质就是一个能够把各种组件（HTML，CSS，js）构建成项目。最方便的是你只需要初始化配置一次，Webpack会替你做那些繁琐的事情，同事也保证了让你可以在项目中混合使用各种技术而不头疼。

项目结构：
+build 客户端代码的构建结果目录
+config 配置信息目录
+lib    服务端库文件
  -render.js  渲染脚本
+src    客户端源代码存放目录
+test   测试文件目录
-index.js 服务器脚本

准备开发环境
构建一个简单的koa服务器
  安装相关依赖：
    koa
    koa-logger
    koa-route
    koa-static
    co-views
    swig
  Babel动态编译代码
    babel-cli
    babel-preset-es2015-node5
    
    
    
测试及启动
使用npm run watch启动webpack-dev-server
使用npm start启动服务器
打开浏览器访问http://localhost:3000查看结果
    
