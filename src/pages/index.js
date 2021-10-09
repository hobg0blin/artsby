import React from "react"
import Layout from "../components/layout"
import Menu from "../components/menu"
import Footer from "../components/footer"
import ArtistData from "../../static/data/work_info.json"
import about from "../../static/data/about.json"
let artists = ArtistData.works

export default function Home() {
  return <Layout header={ about.about_title } subPara={about.about_text}>
    <Menu items={artists}></Menu>

    <Footer className="footer"></Footer>
    </Layout>

}
