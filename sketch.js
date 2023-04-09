// import { Background, GlowCircle } from "./glowing_circles.js";

import { TextBackground } from "./text-animation.js";

const fr = 30;

const bg = new TextBackground();

function setup() {
  // Create the canvas fullscreen size
  createCanvas(window.innerWidth, window.innerHeight);

  frameRate(fr);

  //bg.drawBackground();

  //bg.createCircles();

  

  bg.createTextInstances(window.innerWidth, window.innerHeight, 50);
  
}

function draw() {



 // ellipse(200, 200, 200, 200);

  bg.drawBackground();
  
  bg.drawTextInstances();

  /*
  fill(255);

  for (let x = 0; x < bg._textInstances.length; x++) {
    for (let y = 0; y < bg._textInstances[x].length; y++) {
        bg._textInstances[x][y].renderText();
        //fill(255);
        //text('PK', 100, 100);
    }
  }
  */
  


  //text(bg._text, 100, 100);

  /*
  fill(255);
  text('pk', 100, 100);
  */

}

// For some reason I had to add this to make it work
// see: https://forum.processing.org/two/discussion/24662/script-type-module-draw-and-setup-not-working.html
window.setup = setup;
window.draw = draw;



/*

import { Background } from "./glowing_circles.js";

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(10);
}

// For some reason I had to add this to make it work
// see: https://forum.processing.org/two/discussion/24662/script-type-module-draw-and-setup-not-working.html
window.setup = setup;
window.draw = draw;

*/