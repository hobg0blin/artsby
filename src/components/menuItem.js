import React from "react"

export default function MenuItem(props) {
  let item = props.item
  return (<div className="menu-item"><a href={"/works/" + item.url + "/view.html" }><img alt={ item.altText }className="preview-image" src={`/img/${item.url}.png`} />{item.name} </a> <p>{item.artist}</p></div>
    )
  }

