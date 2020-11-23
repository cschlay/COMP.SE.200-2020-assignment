import isObjectLike from '../src/isObjectLike.js'
import chai from 'chai'

describe('isObjectLike.js',()=>{
    it('negative testing',()=>{
        function input_function(){}
        chai.expect(isObjectLike(null)).to.equal(false)
        chai.expect(isObjectLike(3)).to.equal(false)
        chai.expect(isObjectLike(input_function)).to.equal(false)
    })
    it('positive testing',()=>{
        chai.expect(isObjectLike([])).to.equal(true)
    })
})