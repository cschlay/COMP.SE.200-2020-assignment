import difference from '../src/difference.js'
import chai from 'chai'

describe('difference.js', () => {
    it('arrays that have no unique elements should result empty array', () => {
        chai.expect(difference(['bottle', 'can'], ['bottle'], ['can'])).to.deep.equal([])
    })

    it('array that has unique values result in it having unique values', () => {
        chai.expect(difference(['bottle', 'can'], ['fruit'], ['vegetable'])).to.deep.equal(['bottle', 'can'])
    })

    describe('array is not an iterable results empty array', () => {
        const cases = [
            123,
            null,
            undefined,
            {},
            () => {},
            'cat'
        ]
        cases.forEach(input => {
            it(`input is ${input}`, () => {
                chai.expect(difference(input, ['fruit', 'vegetable'])).to.deep.equal([])
            })
        })
    })
})