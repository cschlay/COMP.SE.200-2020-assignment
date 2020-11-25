import Map from '../src/map.js'
import chai from 'chai'
import map from '../src/map.js'

describe('Map.js',()=>{
    function square(n){
        return n*n
    }
    it('test with square function',()=>{

        chai.expect(map([3,4],square)).to.deep.equal([9,16])
        chai.expect(map([-8,9],square)).to.deep.equal([64,81])
        
    })
    it('test without a function',()=>{
        chai.expect(map([6,7],null)).to.deep.equal([6,7])
    })
})