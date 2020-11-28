import tofinite from '../src/toFinite.js'
import chai from 'chai'
import toFinite from '../src/toFinite.js'

describe('ToFinite.js',()=>{
    it('test with big numbers',()=>{
        chai.expect(toFinite(848000000)).to.equal(8.48e+8)
        chai.expect(toFinite(1.7976931348623158e+308)).to.equal(1.7976931348623157e+308)
        chai.expect(toFinite(-1.7976931348623157e+308)).to.equal(-1.7976931348623157e+308)
    })
})