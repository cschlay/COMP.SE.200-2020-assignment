import Slice from '../src/slice.js'
import chai from 'chai'

describe('Slice.js',()=>{

    var array = [1,2,3,4,5,6,7,8,9]

    it('break an array',()=>{
        
        chai.expect(Slice(array,-6,-2)).to.deep.equal([4,5,6,7])
        chai.expect(Slice(array,3,6)).to.deep.equal([4,5, 6])
        chai.expect(Slice(array,6,3)).to.deep.equal([])
    })
})