import every from '../src/every.js'
import chai from 'chai'

describe('every.js', () => {
    it('using simple function that results false', () => {
        chai.expect(
            every(['euro', 'dollar'], (item) => item !== 'dollar')
        ).to.be.false
    })

    it('using simple function that results true', () => {
        chai.expect(
            every(['euro'], (item) => item === 'euro')
        ).to.be.true
    })

    it('array is not array should throw error', () => {
        chai.expect(() => every(1232, () => {
            return false
        })).to.throw(TypeError)
    })

    it('predicate not being function should throw error', () => {
        chai.expect(() => every([23], 'not func')).to.throw(TypeError)
    })
})