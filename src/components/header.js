import React from "react"
import about from "../../static/data/about.json"

export default function Header(props) {
  return <div className={`header ${props.isOpen} ${props.workHeader ? "work" : ''}`}>
    <div className="exhibit-info"><h1 className="accessibility-tag">{props.headerText}</h1><a href="/"><img className="exhibit-logo" src={ `/${about.header_image}`} alt="" /></a>
      {props.subPara && <p dangerouslySetInnerHTML={{__html: props.subPara}}></p>}</div>
    </div>
}
