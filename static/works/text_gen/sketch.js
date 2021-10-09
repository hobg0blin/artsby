//basic text drawing code shamelessly stolen from https://p5js.org/examples/typography-words.html

//this is a simple example of how you can generate random text using just p5 and a text file.
let fontsize = 20;
let corpus;

function preload() {
  //poem from History As Process by Amiri Baraka
    corpus = `1.
The evaluation of the mysteries by the sons of all
experience. All suffering, if we call the light a thing
all men should know. Or find. Where ever, in the dark folds
of the next second, there is some diminishing beauty we might one day
understand, and scream to, in some wild fit of acknowledged Godliness.

Reality, is what it is. This suffering truth
advertised in all men’s loveliest histories.

The thing, There As Speed, is God, as mingling
possibility. The force. As simple future, what

the freaky gipsies rolled through Europe
on.

(The soul.)

2.

What can I do to myself? Bones
and dusty skin. Heavy eyes twisted
between the adequate thighs of all
humanity (a little h), strumming my head
for a living. Bankrupt utopia sez tell me
no utopias. I will not listen. (Except the raw wind
makes the hero’s eyes close, and the tears that come out
are real.`;
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Set text characteristics
  textSize(fontsize);
  textAlign(CENTER, CENTER);
  frameRate(0.5);
}

function draw() {
  background(40);

  // Align the text to the right
  // and run drawWords() in the left third of the canvas
  textAlign(RIGHT);
  drawWords(width * 0.4, height * 0.4);

  // Align the text in the center
  // and run drawWords() in the middle of the canvas
  textAlign(CENTER);
  drawWords(width * 0.5, height * 0.5);

  // Align the text to the left
  // and run drawWords() in the right third of the canvas
  textAlign(LEFT);
  drawWords(width * 0.6, height * 0.6);
}

function drawWords(x, y) {



    //Clean up the corpus to make sure any double spacing or things like that don't prevent us from getting words
  let filteredCorpus = corpus.split(' ').filter(y => y!="");


  // Then we generate a random variable from the length of our corpus, then randomly decide how many words to pull from that point (between 1 and 4)
  let wordBegin = floor(random(filteredCorpus.length));
  let wordEnd = wordBegin + random(1, 4);



  fill(floor(random(150, 255)));
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position

  // We take out the words at those positions, then take a random word from it.

  text(filteredCorpus.slice(wordBegin, wordEnd).join(' ').trim(), x, y);

}
