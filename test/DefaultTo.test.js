import DefaultTo from '../src/defaultTo.js'
import chai from 'chai'

describe('DefaultTo.js', ()=> {
    it('Should return the default value', ()=>{
        chai.expect(DefaultTo(NaN,"default")).to.equal("default")
    })
})