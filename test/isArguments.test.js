import isArguments from '../src/isArguments.js'
import chai from 'chai'

// Seems like arrow functions do not arguments
function f(a) {
    return arguments
}

describe('isArguments.js', () => {
    it('surely an arguments object', () => {
        chai.expect(isArguments(f('a'))).to.be.true
    })

    const cases = [
        123,
        [],
        '12312',
        {},
        () => {},
        null,
        undefined
    ]

    cases.forEach((input) => {
        it(`input ${input} is certainly not argument`, () => {
            chai.expect(isArguments(input)).to.be.false
        })
    })
})
