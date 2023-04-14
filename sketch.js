

import { TextBackground } from "./text-animation.js";

const fr = 25;

const bg = new TextBackground('Pete', 'uniform-blink');


function setup() {
  // Create the canvas fullscreen size
  createCanvas(window.innerWidth, window.innerHeight);

  frameRate(fr);

  bg.createTextInstances(window.innerWidth, window.innerHeight, 50);

  bg.uniformBlink(); 
  
}

function draw() {

  bg.drawBackground();
  
  bg.drawTextInstances();

}

// For some reason I had to add this to make it work
// see: https://forum.processing.org/two/discussion/24662/script-type-module-draw-and-setup-not-working.html
window.setup = setup;
window.draw = draw;

