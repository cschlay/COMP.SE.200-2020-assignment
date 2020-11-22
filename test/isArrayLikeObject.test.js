import isArrayLikeObject from '../src/isArrayLikeObject.js'
import chai from 'chai'

describe('isArrayLikeObject.js', () => {
    it('integer outputs false', () => {
        chai.expect(isArrayLikeObject(1)).to.be.false
    })

    it('array outputs true', () => {
        chai.expect(isArrayLikeObject([])).to.be.true
        chai.expect(isArrayLikeObject([1,2,3,4])).to.be.true
    })

    it('string outputs true', () => {
        chai.expect(isArrayLikeObject('iamstring')).to.be.true
    })
})
