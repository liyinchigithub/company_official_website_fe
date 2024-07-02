<!--
 * @Date: 2023-11-24 22:59:48
 * @LastEditTime: 2023-11-26 22:40:31
-->

# 一个全套公司企业官网 前端项目 （springboot +vue ）

[后端项目地址](https://github.com/liyinchigithub/company_official_website_server)

## 技术栈

- nodejs
	- v14.21.3
	- v12.22.12
- vue
	- 2.6 
- elementUI
 	- 


 安装

## npm
```
npm run dev
```

```
npm run build
```

编译后项目文件
dist

## yarn
```
yarn
```

### 启动
```
yarn dev
```

### 打包
```
yarn build
```


# 配置修改

## **域名**修改

>src/config/index.js

## **请求头**修改

>src/utils/request.js

## **路由**修改

>src/router/index.js

每新增一个页面，需要在路由中配置该页面的跳转路由

```
    // 商品详情
 {
        path: '/product/:id',
        name: 'ProductDetail',
        component: () => import('@/views/front/components/ProductDetail.vue'),
        props: true
    }
```

## **请求地址**修改

>src/api/index.js

## **允许跨域**修改

### 前端配置跨域

>vue.config.js

修改前端跨域请求后端的域名地址

```js
module.exports = {
  publicPath: './',
  devServer: {
    disableHostCheck: true,
    port: 9000,
    proxy: {
      '/api/': {
        target: 'http://127.0.0.1:8088',   // 测试环境
        changeOrigin: true,  // 是否跨域
        pathRewrite: {
          '^/api/': ''
        }
      },
    },
  },
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].title = '智慧其心';
        return args;
      })
  }
}
```
每个请求路径，会自动带上/api/

http://localhost:9000/api/v1/carousels/getAllCarousels

>src/api/index.js

### 后端配置跨域

>com/cows/config/WebConfig.java

```java
package com.cows.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 *
 * @Description: 启用跨域资源共享
 *
 * */
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://127.0.0.1:9000") // 前端项目的地址
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                        .allowedHeaders("*")
                        .allowCredentials(true);
            }
        };
    }
}
```

### 注意版本

node版本 16  18 可能会有问题

npm 版本
6.14.18
