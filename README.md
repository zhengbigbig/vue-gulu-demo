# gulu - 一个Vue UI 组件

[![Build Status](https://travis-ci.org/zhengbigbig/vue-gulu-demo.svg?branch=master)](https://travis-ci.org/zhengbigbig/vue-gulu-demo)

## 介绍

学习Vue 过程中自制的UI框架，希望能对你有所作用。

## 开始使用

1. 安装

使用本框架前，请初始化CSS

```
*,*::before,*::after{box-sizing:border-box;}
```
IE 8 及以上浏览器支持；

你还需要设置默认颜色变量（后续会改为使用SCSS变量）
```
    html {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
```
IE15 及以上浏览器支持；

2. 安装gulu
  ```
  npm i --save zhengbigbig-gulu-1
  ```

3. 引入 gulu
    ```
    import {Button,ButtonGroup,Icon} from 'zhengbigbig-gulu-1'
    import 'zhengbigbig-gulu-1/dist/index.css'

    export default {
        name:'app',
        components:{
            'g-button':Button,
            'g-icon':Icon
        }
    }

## 文档

## 提问
