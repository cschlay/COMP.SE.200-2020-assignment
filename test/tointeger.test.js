import toInteger from '../src/toInteger.js'
import chai from 'chai'
import toFinite from '../src/toFinite.js'

describe('toInteger.js',()=>{
    it('convert float to int',()=>{
        chai.expect(toFinite(3.145)).to.equal(3)
        chai.expect(toFinite(-34.12)).to.equal(0)
    })
    it(' test with big number',()=>{
        chai.expect(toFinite(1.7976931348623157e+308)).to.equal(1.7976931348623157e+308)
    })
})
