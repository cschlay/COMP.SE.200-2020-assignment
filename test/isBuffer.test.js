import isBuffer from '../src/isBuffer.js'
import chai from 'chai'

describe('isBuffer.js', () => {
    it('basic array results false', () => {
        chai.expect(isBuffer([1,2,3,4])).to.be.false
    })

    it('buffer.alloc call should output true', () => {
        chai.expect(isBuffer(Buffer.alloc(2,1))).to.be.true
    })
})