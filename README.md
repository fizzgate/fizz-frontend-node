# Fizz网关管理后台系统
     
Fizz网关管理后台是Fizz Gateway的配套系统，基于Java、Vue开发，提供友好的图形化配置界面，支撑Fizz Gateway的热服务编排、自动授权选择、线上服务脚本编码、在线测试、高性能路由、API审核管理、自定义插件等功能的配置使用。  



## 官网
- 文档：[https://www.fizzgate.com](https://www.fizzgate.com)
- 在线演示：[http://demo.fizzgate.com](http://demo.fizzgate.com)


## 前端模块项目开发说明
1、fizz管理后台使用 qiankun 进行模块集成

2、module/mysql 为示例代码（使用vue框架），可在其基础上进行修改;
   也可以使用react、angular 等其他技术框架开发

3、修改 constants.js 配置文件，主要对下面两个参数进行修改：
   (1) name:  string - 必选，微应用的名称，微应用之间必须确保唯一。
   (2) entry: string - 必选，微应用的入口。如 module/mysql 模块地址为 //localhost:1890

```
var Constant = (function(){
    return {
        aggregate:{
            plugins:{
                mysql:{
                    "name" : "mysqlItem",
                    "entry": "//localhost:1890"
                }
            }
        }
    }
})();
```

4、注意：注意该项目为webpack打包产物，不能直接启动，可通过nginx进行启动


