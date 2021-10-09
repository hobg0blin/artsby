import React, {useState, useEffect} from "react"
import Layout from "../components/layout.js"
import ArtistData from "../../static/data/work_info.json"
import Footer from "../components/footer.js"
import alphabeticSort from "../components/alphabeticSort.js"

const works = ArtistData.works
const Work = props => {
  let html = props.pageContext.content
  let i=0
  let index
  let workInfo = works.filter(work => {
    let url = work.url
    if (props.pageContext.url == url) {
      index = i;
      return true;
    }
    i++;
  })[0]

  let prev = index - 1
  let next = index + 1

  //  let [button, setButton] = useState('')
  const [headerOpen, setOpen] = useState(true)
  function handleChange(val) {
    setOpen(val)
  }
  useEffect(() => {
    window.addEventListener('keydown', forwardKeyEvent)
})

  function forwardKeyEvent(e) {
    const iframe = document.getElementById(workInfo.url)
    iframe.contentDocument.dispatchEvent(new KeyboardEvent('keydown', {key: e.key, keyCode: e.keyCode}))
  }
  function setFullScreen(e) {
    e.preventDefault()
    let iframe = document.getElementById(workInfo.url)
    if (iframe.requestFullscreen) {
    iframe.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`)
    })
    }
    else if (iframe.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen()
    }
      else if (iframe.msRequestFullscreen) {
      iframe.msRequestFullscreen()
      }
    if (iframe.contentWindow.fullscreenResize) {
      //this worked like one time
      iframe.contentWindow.fullscreenResize(iframe.contentWindow.screen.width, iframe.contentWindow.screen.height)
    }
  }
  let button = <button className="fullscreen" onClick={setFullScreen}><svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><path d="m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z"></path><path d="m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z"></path><path d="m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z"></path><path d="M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z"></path></svg></button>
  return (

    <div className="work"><Layout header= { workInfo.name } previous={prev >= 0 ? `/works/${works[prev].url}/view.html` :`/works/${works[works.length-1].url}/view.html` } next={next < works.length ? `/works/${works[next].url}/view.html` : `/works/${works[0].url}/view.html`} headerState = { headerOpen } onClick={handleChange} headerType='work-header' subHead = { workInfo.artist }></Layout> <div className="iframe-container"><iframe  id={ workInfo.url } allow="fullscreen" className={!headerOpen ? "large": ''} srcDoc={html} title={`A frame containing the piece: ${workInfo.name} by ${workInfo.artist}`}></iframe>{  button }</div>
      <Footer   isOpen={headerOpen ? "open" : "closed"}></Footer></div>
  )
}
export default Work


