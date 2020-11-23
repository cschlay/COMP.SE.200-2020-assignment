import isTypedArray from '../src/isTypedArray.js'
import chai from 'chai'

describe('isTypedArray.js',()=>{
    it('test with incorrect values',()=>{
        chai.expect(isTypedArray("defintely an array")).to.equal(false)
        chai.expect(isTypedArray({})).to.equal(false)
    })
    it('test with correct values',()=>{
        var new_array = new Array("Volvo",12,"BMW")
        chai.expect(isTypedArray(new_array)).to.equal(true)
    })
})