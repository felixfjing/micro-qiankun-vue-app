# micro-qiankun-vue-app

micro-qiankun-vue-app

### 一个 Qiankun 微应用项目

实现了微应用加载、应用之间的简单通讯。

### 安装

```
// 同步安装所有依赖
npm install all:install

// 也可以进到每一个项目独立安装
```

### 运行

```
// 同时启动全部服务
npm install all:serve

// 也可以进到每一个项目独立运行，但尽量不要修改端口号
```

### 端口说明：

```
micro-app-main：主应用（基座），9999

micro-app-message：子应用（消息模块），10100

micro-app-user：子应用（用户模块），10300
```
