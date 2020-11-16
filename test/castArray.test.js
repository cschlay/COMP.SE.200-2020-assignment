import castArray from '../src/castArray.js'
import chai from 'chai'

describe('castArray.js', () => {
    it('anything should be castable', () => {
        const cases = [
            2002,
            'i want ice cream',
            null,
            undefined,
            {},
            () => {},
            ''
        ]

        cases.forEach(input => {
            const casted = castArray(input)
            chai.expect(casted).to.deep.equal([input])
        })

        // The arrays are separately done.
        chai.expect(castArray([])).to.deep.equal([])
        chai.expect(castArray(['a', 2])).to.deep.equal(['a', 2])
    })
    
    it('should return empty array if no arguments provided', () => {
        chai.expect(castArray()).to.deep.equal([])
    })

    it('multiple argument calls may have unexpected behavior', () => {
        chai.expect(castArray([], [], [])).to.deep.equal([])
        chai.expect(castArray('Kitten', 'wants', 'milk')).to.deep.equal(['Kitten'])
    })
})