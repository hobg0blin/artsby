import React, { useState } from "react"
import Header from './header.js'

export default function WorkHeader(props) {
  let open = props.headerState
  function handleChange() {
    props.onClick(!open);
  }
  // previously used to minimize header, still here in case we need it    <a onClick= {handleChange} className={`icon-show-hide ${open ? "hide-header": "show-header"}`}></a>

  return <div><Header workHeader={ true } isOpen={ open ? "open" : "closed"}></Header><div className={`header work work-header ${ open ? "open" : "closed" }`}>
  <div>{ props.previous && <a className="previous" href={props.previous}>Previous</a>}</div>
  <div className="info"><h1>{props.headerText}</h1>
    {props.subHead && <h2><a href={`/about#${ props.subHead.replace(/[^a-zA-Z0-9]/g,'_') }`}> {props.subHead}</a> </h2>}
    {props.subPara && <p> {props.subPara} </p>}</div>
  {props.next &&<div><a className="next" href={props.next}>Next</a></div>}
  </div></div>
}

WorkHeader.defaultProps = {
  open: true
}
