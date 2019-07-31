# 21cake-vue
仿21cake vue版

## 说明

这是一个平时看心情写的项目，仅供自己学习。

**温馨提示：本项目纯属于学习，正常购买下单请选使用   [21cake-m站](https://m.21cake.com/)**

开工：2018-05-05

今天终于开动啦

更新：2019-05-26

不知不觉一年了，功能还没有实现一半，看来我真的不是一个很有积极性的人，Orz

## 技术栈
vue + vuex + vant + webpack3 + fetch + stylus

api：

使用的全部都是21cake自家的api

关于跨域：

本地可以通过配置nginx反向代理来解决，但是我是部署在gh-pages上，那么跨域怎么办？？？

1.使用vue-resource解决；

2.使用第三方接口代理[JsonBird](https://bird.ioliu.cn/)解决，个人使用问题不大，此处感谢作者无私奉献。


## 预览
[查看demo](https://superjiajia.github.io/21cake-vue/)（请打开控制台进入手机模式）

<!-- 建议您使用手机扫描下方的二维码
![21cake-qrcode-link](http://i67.tinypic.com/2lifw2u.png) -->

## 目标

- [ ] 定位功能 ------已完成
- [ ] 选择城市 ------已完成
- [x] 展示所选城市的商品 ------已完成
- [ ] 搜索商品 ------ api限制，暂不实现
- [ ] 根据销量、价格排序和品类、口味筛选 ------ api限制，暂不实现
- [x] 选择商品规格  ------已完成
- [x] 加入购物车
- [ ] 删除商品
- [x] 修改数量
- [ ] 单选/多选
- [ ] 付款
- [ ] 账户信息
- [ ] 上传头像
- [ ] 我的订单
- [ ] 订单详情
- [ ] 我的收藏
- [ ] 收货地址
- [ ] 登录/注册