import divide from '../src/divide.js'
import chai from 'chai'

describe('divide.js', () => {
    describe('some proper divisions should succeed', () => {
        const cases = [
            [1, 1, 1],
            [-1, 1, -1],
            [-1, -1, 1],
            [1, -1, -1],
            [20, 5, 4],
            [-99, 3, -33],
            [0, 20, 0],
            [0, -20, 0]

        ]
        cases.forEach(([dividend, divisor, result]) => {
            it(`${dividend} / ${divisor} = ${result}`, () => {
                chai.expect(divide(dividend, divisor)).to.equal(result)
            })
        })
    })

    it('division by zero should return NaN', () => {
        const values = [0.000001, -0.000001, 1, -1, 10, -10]
        values.forEach(item => chai.expect(divide(item, 0)).to.be.NaN)
    })
})
