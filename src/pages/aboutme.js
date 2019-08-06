import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Global, css } from '@emotion/core'
import { Link } from "gatsby"

export default function aboutme() {
    return (
        <Layout>
            <Link to="/">返回</Link>
            <div className="list">
                <div className="type">联系我</div>
                <p>手机/微信:13618618168</p>
            </div>
            <div className="list">
                <div className="type">我期望加入的公司</div>
                <p>公司有>10人的前端团队(之前公司前端不多，主要工作量在我身上)</p>
                <p>主要使用react或vue技术栈 ，并且有成熟的构建流程如代码规范，类型检查，自动化测试，持续集成部署等</p>
                <p>26~30岁我想要全力以赴，希望这份工作我能做得长久一点,并且在技术上更有深度，在业务上多解决质量，效率，性能，安全方面的问题</p>
            </div>
            <div className="list">
                <div className="type">我能做的项目</div>
                <p>
                    web端：熟练的有 官网，后台管理，运营统计大数据展示，尝试过 富文本编辑器
                </p>
                <p>
                    移动端：熟练的有 微信小程序，hybridApp内嵌H5页面，h5活动页，h5小游戏,尝试过 3d的小游戏和
                   react-native</p>
                <p>服务端：c#，node express koa,leancloud云服务对象存储</p>
                <p>pc端：electron有简单尝试过</p>
            </div>
            <div className="list">
                <div className="type">github</div>
                <p>https://github.com/catchOneW(主要是工作中写的一些demo，能独立开发组件库，后续会把以前写过的组件逐渐整理好再开源)</p>
            </div>
            <div className="list">
                <div className="type">博客</div>
                <p>待整理好后再更新...</p>
            </div>
        </Layout>
    )
}
