const TextBackground = require('../text-animation.js');
const assert = require('assert');

describe('TextBackground', () => {

    describe('.drawBackground()', () => {

        it('fills background with', () => {
            // undefined yet
        })

    })

    describe('.createTextInstances()', () => {
        
        it('creates an array of arrays containing text instances filling x and y size of screen', () => {
            //
        })

        it('creates 2 x instances when windowWidth = 100 and size of textHolder = 50', () => {
            // setup
            const expectedResult = 2;
            const bg = new TextBackground();

            // exercise
            const result = bg.createTextInstances(100, 100, 50);

            // verify
            assert.equal(result, expectedResult);

        })
        it('creates 3 x instances when windowWidth = 150 and size of textHolder = 50', () => {
            // setup
            const expectedResult = 3;
            const bg = new TextBackground();

            // exercise
            const result = bg.createTextInstances(150, 150, 50);

            // verify
            assert.equal(result, expectedResult);

        })
    })
})