
class TextBackground {
    constructor(text = 'PK',
                textSize = 25, 
                space = 100,
                backgroundColor = [247, 100, 0, 1],
                textColor = [247, 100, 100, 1],
                blink = true
        )          
        {
        this._text = text;
        this._textSize = textSize;
        this._space = space;
        this._backgroundColor = backgroundColor;
        this._textColor = textColor;
        this._blink = blink;
        this._textInstances = [];
        
    }

    drawBackground () {
        /* Draw the background */
        colorMode(HSL);
        background(color(this._backgroundColor[0], this._backgroundColor[1], this._backgroundColor[2], this._backgroundColor[3]));
    }

    createTextInstances(windowWidth, windowHeight, space) {
        /* Create a 2D array of TextInstance objects */
        
        // Outer array is an x index, each inner array is Y axis
        for (let x = 0; x < windowWidth; x += space) {
            let innerArray = [];
            for (let y = 0; y < windowHeight; y += space) {
                const textInstance = new TextInstance(x, y);
                innerArray.push(textInstance);
            };
            this._textInstances.push(innerArray);
        }
        
    }

    drawTextInstances () {

        for (let x = 0; x < this._textInstances.length; x++) {
            for (let y = 0; y < this._textInstances[x].length; y++) {
                this._textInstances[x][y].renderText();
            }
        }
    }

    blinkAtRandom () {
        this._blink = true;
    }

    
}

class TextInstance extends TextBackground {

    constructor(posX, posY, ...args) {
        super(...args);
        this._posX = posX;
        this._posY = posY;
        this._startA = 0;
        this._endA = 1;
        this._p = 0;

    }

    renderText () {

        
        // If blink is set, call get Interp for interpolated transition value
        if (this._blink === true) {

            const interp = this.getInterp();

            this.setDrawModes(interp);

            // set HSLA color for circle
            fill(this._textColor[0], this._textColor[1], this._textColor[2], interp);
        } else {
            fill(this._textColor[0], this._textColor[1], this._textColor[2], this._textColor[3]);
        }
        
        text(this._text, this._posX, this._posY, this._posX + 100, this._posY + 100);
    }


    getInterp() {
        // Alpha transition logic
        if (this._p <= 1 ) {
            this._p += 0.1;
        } else {
            // If p has reached 1 (it has reached its end value, the end value becomes the start value and we get a random new end value)
            this._startA = this._endA
            this._endA = Math.random();
            this._p = 0;
            /*
            console.log(`startA = ${this._startA}, 
            endA = ${this._endA}, 
            p = ${this._p}`);
            */
        }

        return lerp(this._startA, this._endA, this._p);
    }

    setDrawModes(alph = this._textColor[3]) {
        // set fill color using alpha value if supplied
        fill(this._textColor[0], this._textColor[1], this._textColor[2], alph);
        // set other draw modes
        rectMode(CORNER);
        textAlign(CENTER, CENTER);
        textSize(this._textSize);
        colorMode(HSL);
    }

}

export { TextBackground };

//module.exports = TextBackground;