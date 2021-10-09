import React, {useEffect} from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import ArtistData from "../../static/data/work_info.json"
import about from "../../static/data/about.json"
let artists = ArtistData.works
export default function About() {
  useEffect(() => {
    if (window.location.hash) {
    let anchor = document.querySelector(window.location.hash)
        anchor.scrollIntoView({behavior: "smooth", block: "start"})
  }
  })

  return <Layout header={about.about_title} subPara="">
    <div className="about about-page" >
      <div className="about-text" dangerouslySetInnerHTML={{__html: about.about_text}}></div>
    <ul>
      { artists.map(artist => (
        <li>
          <a href={`/works/${artist.url}/view.html`}> { artist.name }</a> - <a className="artistBio" id = {artist.artist.replace(/[^a-zA-Z0-9]/g,'_')} href={`#${artist.artist.replace(/[^a-zA-Z0-9]/g,'_')}`}>{artist.artist}</a>
        <br/>
        <p dangerouslySetInnerHTML={{__html: artist.bio}}></p>
      </li>
      ))
      }
    </ul>
    </div>
    <Footer></Footer>
    </Layout>

}
