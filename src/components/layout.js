import React from "react"
import Header from "./header.js"
import WorkHeader from "./work-header.js"

export default function Layout(props) {
  let header = <Header headerText={ props.header } subHead= { props.subHead } subPara = {props.subPara}></Header>
    if (props.headerType == 'work-header') {
      header =<WorkHeader previous= {props.previous} next={props.next} headerText={ props.header } subHead= { props.subHead } subPara = {props.subPara} headerState = {props.headerState} onClick = {props.onClick}></WorkHeader>

    }
  return <div className="layout"><div className="website-content">{header}{ props.children }</div></div>}
