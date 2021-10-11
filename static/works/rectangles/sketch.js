let my_colors = ['red', 'green', ' blue', 'yellow']
function setup() {
  createCanvas(windowWidth, windowHeight)
  frameRate(10)
}

function draw() {
  background(220);
  for (i = 0; i < 100; i++) {
    let x = random(0, windowWidth)
    let y = random(0, windowHeight)
    let w = random(0, 200)
    let h = random(0, 100)

    fill(my_colors[int(random(0, 3))])
    rect(x, y, w, h)
  }

}

function windowResized() {
  setTimeout(() => {
    window.location.reload()
  }, 1000)
}
