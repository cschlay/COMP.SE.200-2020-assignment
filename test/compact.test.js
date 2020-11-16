import compact from '../src/compact.js'
import chai from 'chai'

describe('compact.js', () => {
    describe('array with only false values should return empty array', () => {
        const cases = [
            undefined,
            null,
            0,
            false,
            '',
            NaN
        ]
        cases.forEach(input => {
            it(`input is ${input}`, () => {
                chai.expect(compact([input])).to.deep.equal([])
            })
        })
    })

    describe('array length one true value and one false should return the true one', () => {
        const cases = [
            undefined,
            null,
            0,
            false,
            '',
            NaN
        ]
        cases.forEach(input => {
            it(`input is [\'here\', ${input}]`, () => {
                chai.expect(compact(['here', input])).to.deep.equal(['here'])
            })
        })
    })

    it('array contains some truthy values', () => {
        chai.expect(
            compact(
                ['car', false, 'bike', 'bus', NaN, 'train', undefined, '', null]
            )
        ).to.deep.equal(['car', 'bike', 'bus', 'train'])
    })

    describe('array is not iterable throws TypeError', () => {
        const cases = [
            {},
            1,
            () => {}
        ]

        cases.forEach(input => {
            it(`input is ${input}`, () => {
                chai.expect(compact, input).to.throw(TypeError, 'array is not iterable')
            })
        })
    })
})
