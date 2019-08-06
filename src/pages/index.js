import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
//import SEO from "../components/seo"

import '../scss/real-world/blog-ui/index.scss'

let myPrj = {
  'web-民生大鹏': [
    require('../images/web/msdp1.png'),
    require('../images/web/msdp2.png'),
    require('../images/web/msdp3.png'),
  ],
  'web-开放平台': [
    require('../images/web/opendp1.png'),
    require('../images/web/opendp2.png'),
  ],
  '小程序': [
    require('../images/native/1.png'),
    require('../images/native/2.png'),
    require('../images/native/3.png'),
    require('../images/native/4.png'),
  ],
  'hybridApp-h5': [
    require('../images/h5/mswss.png'),
  ],
  'svg-年度用户': [
    require('../images/svg/bat1.png'),
    require('../images/svg/bat2.png'),
    require('../images/svg/bat3.png'),
  ],
  'canvas-中控大屏': [
    require('../images/canvas/zhongkong.png'),
  ],
}
let alltypes = Object.keys(myPrj)
const IndexPage = () => (
  <Layout>
    <Link  to="/aboutme/">关于我</Link>
    {
      alltypes.map(t => {
        return (
          <div className="list" key={t}>
            <div className="type">
              {t}
            </div>
            <div className="imgs">
              {
                myPrj[t].map(
                  (p, i) => {
                    return <img key={t + i} src={p} alt="" />
                  }
                )
              }
            </div>
          </div>
        )
      })
    }
  </Layout>
)

export default IndexPage
