import isLength from '../src/isLength.js'
import chai from 'chai'
import isTypedArray from '../src/isTypedArray.js'

describe('isLength.js',()=>{
    var long_int = 9007199254740992
    it('test with too high number',()=>{
        
        chai.expect(isLength(long_int)).to.equal(false)
    })
    it('test with smaller number',()=>{
        chai.expect(isLength(long_int-2)).to.equal(true)
    })
})