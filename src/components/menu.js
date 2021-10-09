import React from "react"
import MenuItem from "./menuItem.js"
import alphabeticSort from './alphabeticSort.js'
import artistData from '../../static/data/work_info.json'

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


const works = artistData.works
export default function Menu(props) {
  return (<div className="menu">
    { works.map(item => (
      <MenuItem item={item} />
    ))
    }
      {/*blank div for spacing */}
      <div></div>
    </div>)
}
