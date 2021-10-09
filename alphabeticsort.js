const fs = require('fs')
function alphabeticSort(items) {
  return items.sort((a, b) => {
    console.log('a: ', a)
    return (a.name.toUpperCase() < b.name.toUpperCase()) ? -1 : (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : 0
  })
}
fs.readFile('./static/data/work_info.json', (err, data) => {
  alp = alphabeticSort(JSON.parse(data).works)
  fs.writeFile('work_info.json', JSON.stringify({'works': alp}), err => {
    console.log('error', err)
  })
})


