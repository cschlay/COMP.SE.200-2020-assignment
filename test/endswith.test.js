import endswith from '../src/endswith.js'
import chai from 'chai'

describe('endswith.js', () => {
    it('the end exists', () => {
        chai.expect(endswith('this exists', 'exists')).to.be.true
    })

    it('the end doesn\'t exist', () => {
        chai.expect(endswith('this doesn\'t exist', 'ok')).to.be.false
    })

    it('position cause the result to be false', () => {
        chai.expect(endswith('this exists', 'exists', 6)).to.be.false
    })
})