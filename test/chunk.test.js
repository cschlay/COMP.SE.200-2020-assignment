import chunk from '../src/chunk.js'
import chai from 'chai'

describe('chunk.js', () => {
    it('expected even split, the lengths are same', () => {
        chai.expect(
            chunk(['coffee', 'cocoa', 'chocolate', 'mint'], 2)
        ).to.deep.equal([['coffee', 'cocoa'], ['chocolate', 'mint']])
    })
    
    it('expected uneven split',  () => {
        chai.expect(
            chunk(['coffee', 'cocoa', 'chocolate', 'mint'], 3)
        ).to.deep.equal([['coffee', 'cocoa', 'chocolate'], ['mint']])
    })

    describe('array is not an array results empty array', () => {
        const cases = [
            null,
            undefined,
            () => {},
            12
        ]
        // As opposed to plan, a fixed number is used because it shouldn't affect.
        cases.forEach((input) => {
            it(`${input} should result empty array []`, () => {
                chai.expect(chunk(input), 5).to.deep.equal([])
            })
        })
    })

    // Accidentally found new case because turns out string is chunkable but shouldn't be
    it('string should not be splitted', () => {
        chai.expect(chunk('shouldnt')).to.deep.equal([])
    })

    it('array length is 0 results empty array', () => {
        chai.expect(chunk([]), 20).to.deep.equal([])
    })
})