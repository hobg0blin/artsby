export default function alphabeticSort(items) {
  return items.sort((a, b) => {
    return a.name[0] > b.name[0]
  })
}

