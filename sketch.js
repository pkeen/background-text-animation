

import { TextBackground } from "./text-animation.js";

const fr = 25;

const bg = new TextBackground();

/*
let intervalTest = 0;

setInterval( () => {
  intervalTest === 0 ? intervalTest = 1 : intervalTest = 0;
  console.log(intervalTest);
}, 1000)

*/

function setup() {
  // Create the canvas fullscreen size
  createCanvas(window.innerWidth, window.innerHeight);

  frameRate(fr);

  bg.createTextInstances(window.innerWidth, window.innerHeight, 50);

  //bg.uniformBlink(); 
  
}

function draw() {

  bg.drawBackground();
  
  bg.drawTextInstances();

  //bg.uniformBlink();
}

// For some reason I had to add this to make it work
// see: https://forum.processing.org/two/discussion/24662/script-type-module-draw-and-setup-not-working.html
window.setup = setup;
window.draw = draw;

