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
yarn add vue-module-creator
```
1、进入目录module，生成vue项目
```javascript
cd module;
vmc create; 
// 输入项目名称，创建项目
yarn add vue-module-loader --save
```
2、添加项目入口文件module.js
```javascript
import MysqlItem from './components/aggregate/mysql-item.vue'
import routes from './router/routes'
import storeModule from './store/store-module'
export default function(Vue) {
  Vue.config.productionTip = false
  this.$router.addRoutes(routes)
  this.$store.registerModule('mysql', storeModule)
  this.$dynamicComponent.create(MysqlItem)
}

```    
3、编写组件mysql-item.vue
```javascript
<template>
    <div>
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
    </div>
</template>
<script>
export default {
    name: 'mysqlItem',
    props: {
        requestForm: { // 名字已经固定，请勿修改
            default() {
                return {};
            }
        }
    }
}
</script>
```
4、编译组件
在package.json中scripts中添加
```javascript
  "scripts": {
    "serve": "concurrently \"vue-cli-service serve -mode development\" \"vue-cli-service build --target lib src/module.js --dest public --watch\"",
    "build:app": "vue-cli-service build -mode production",
    "build:module": "vue-cli-service build --target lib src/module.js --dest public",
    "publish": "vue-cli-service build --target lib src/module.js --dest ../../public/module/mysql"
  },
```
5、使用命令编译
```javascript
yarn run build:module
```
6、编译之后的文件为：mysql.umd.js
7、配置Fizz管理后台
接下来需要让Fizz管理后台能够加载该组件，找到Fizz后台中public文件夹中constant.js，配置如下：
```javascript
var Constant = (function(){
    return {
        aggregate:{
            plugins:{
                mysql:{
                    "entry":NODE_ENV === 'development' ? "//localhost:8080/mysql.umd.js":"/public/module/mysql/mysql.umd.js",
                    "component":"mysqlItem" // 该字段需要与mysql-item.vue中name字段对应
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