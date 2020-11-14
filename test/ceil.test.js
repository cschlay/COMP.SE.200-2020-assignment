import ceil from '../src/ceil.js'
import chai from 'chai'

describe('ceil.js', () => {
    describe('expected ceil values', () => {
        const cases = [
            [0.0001, undefined, 1],
            ['0.0001', 1, 0.1],
            [0.1, 1, 0.1],
            ['0.1', 1, 0.1],
            [0.001, 2, 0.01],
            ['0.001', 2, 0.01],
            // NOTE: turns out the plan was missing one zero.
            [10, -3, 1000],
            [1, -4, 10000]
        ]
        
        cases.forEach(([input, precision, expected]) => {
            it(`${input} with ${precision} should ouput ${expected}`, () => {
                chai.expect(ceil(input, precision)).to.equal(expected)
            })
        })
    })

    describe('invalid values shouldn\'t ceil', () => {
        // Note that valid cases were removed although plan had them
        // because in time of writing it was not known that '32' is number in javascript.
        const cases = [
            [1, 0.1],
            [null, undefined],
            [undefined, undefined],
            ['adk', undefined],
        ]

        cases.forEach(([input, precision]) => {
            it(`${input} ${precision}`, () => {
                chai.expect(ceil(input, precision)).to.be.NaN
            })
        })
    })
})
