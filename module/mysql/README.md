---
home: false
title: 聚合类型扩展
---
# 重要说明
Fizz该功能现阶段仅对商业用户开放。
# Fizz聚合模块
Fizz能够支持扩展聚合编辑器的功能。在现阶段原生官方支持的聚合类型中仅有的REQUEST，Dubbo，gRPC三种RPC请求方式。但Fizz能够支持的包含但不仅限于RPC，虽然聚合模块设计的时候我们更多考虑RPC请求聚合以避免过多的业务逻辑进入聚合模块影响性能，但如果想要支持更多数据聚合类型，Fizz现阶段也提供对应的解决方案。
# 扩展方法
Fizz聚合编辑器配置之后的陪hi文件的分发流程为：编辑器——》管理端存储——》缓存——》节点，编辑器负责配置文件的编辑，中间管理端负责配置文件的存储和节点分发，最终节点负责识别解析配置文件。所以我们需要修改包含两部分：
1、增加后台编辑器中聚合类型的支持；
2、增加节点中聚合代码对于新增类型的支持；
## 编辑器支持
### 前端开发步骤
1、安装支持
```javascript
yarn add qiankun
```

2、进入目录module，使用vue-cli生成vue项目
```javascript
cd module;
vue create mysql; 
yarn add qiankun --save
```   

3、编写mysql模块
   （1）main.js 中导出qiankun相应生命周期函数
   （2）vue.config.js 配置修改
```javascript
const packageName = require('./package.json').name;

configureWebpack: {
     output: {
          library: `${packageName}`,
          libraryTarget: 'umd'
     }
},
devServer: {
    port: 1890,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
}
```

4、编写mysql组件
```javascript
<template>
    <el-form :rules="rules"  size="small"
            label-width="110px" :model="requestForm">    
        <el-form-item label="连接地址" prop="URL" key="URL">
                <el-input v-model="requestForm.URL" clearable></el-input>
                <span class="key-tips">数据库链接地址，如：r2dbcs:mysql://root:password@localhost:3306/archer?useSSL=false&useUnicode=true&characterEncoding=utf-8&zeroDateTimeBehavior=convertToNull&transformedBitIsBoolean=true&serverTimezone=GMT%2B8&nullCatalogMeansCurrent=true&allowPublicKeyRetrieval=true</span>
        </el-form-item>
        <el-form-item label="查询数据SQL" prop="sql" key="sql">
                <el-input type="textarea" v-model="requestForm.sql" clearable></el-input>
                <span class="key-tips">示例：Select dd* from users 请勿以分号结尾</span>
        </el-form-item>
        <el-form-item label="绑定参数" prop="binds" key="binds">
                <el-input v-model="requestForm.binds" clearable></el-input>
                <span class="key-tips">输入使用JSON{"id":"1"}</span>
        </el-form-item>
    </el-form>
</template>
<script>
export default {
    name: 'mysqlItem',
    data() {
      return {
        rules: {
          URL: [
            { required: true, message: 'URL是必填', trigger: 'change' }
          ],
          sql: [
            { required: true, message: '必填', trigger: 'change' },
          ],
          binds: [
            { required: true, message: '必填', trigger: 'change' }
          ]
        },
        requestForm: {
            URL:"",
            sql:"",
            binds:""
        }
      }
    },
    created(){
        if (window.globalProps)
            this.requestForm = window.globalProps.requestForm;
    }
}
</script>
```

5、配置Fizz管理后台
接下来需要让Fizz管理后台能够加载该组件，找到Fizz后台中public文件夹中constant.js，配置如下：
```javascript
var Constant = (function(){
    return {
        aggregate:{
            plugins:{
                mysql:{
                   "name" : "mysqlItem",
                    "entry": "//localhost:1890"  // 对应 mysql 项目的地址
                }
            }
        }
    }
})();
```
### 说明
调试模式可以启动serve，Fizz管理后台能够根据配置加载对应路径的Web Component
## 节点支持
### 节点开发步骤
1、在合适的位置注册Input
```java
InputFactory.registerInput(MySQLInput.TYPE, MySQLInput.class);
```
2、编写MySQLInput.java
```java
public class MySQLInput extends Input implements IInput {
    static public InputType TYPE = new InputType("MYSQL");
    public static Class inputConfigClass (){
        return MySQLInputConfig.class;
    }
    public void beforeRun(InputContext context){

    }
    public Mono<Map> run(){
        // items 是根据数据库读取之后的结果处理
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("data", items);
        result.put("request", this);
        return Mono.just(result);
    }
}
```
3、编写配置MySQLInputConfig.java
```java
public class MySQLInputConfig extends InputConfig {

	public MySQLInputConfig(Map configBody) {
		super(configBody);
	}
    // 在这里解析前端传递过来的配置
	public void parse(){
    }
}
```