import isobject from '../src/isObject.js'
import chai from 'chai'

describe('isOject.js', ()=>{
    it('testing with not an object',()=>{
        chai.expect(isobject(null)).to.equal(false)
        chai.expect(isobject()).to.equal(false)
    })
    it('testing with an object',()=>{
        chai.expect(isobject([1,2,3,5])).to.equal(true)
        chai.expect(isobject('adfd')).to.equal(true)
    })
})