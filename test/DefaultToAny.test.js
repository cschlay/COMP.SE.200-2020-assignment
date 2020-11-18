import DefaultToAny from "../src/defaultToAny.js"
import chai from "chai"

describe('DefaultToAny.js', ()=>{

    var result = "return me"
    var defaultvalue = "not me"
    const values = [NaN,null,undefined]

        values.forEach(input=> {
            it(`Should return the second default argumen with input ${input}`,()=>{
                chai.expect(DefaultToAny(input,null,result,defaultvalue)).to.equal(result)
        })
    })
    
        values.forEach(input => {
            it(`Should return the first default argument with input ${input}`,()=>{
                chai.expect(DefaultToAny(input,result,defaultvalue)).to.equal(result)
        })
    })
    
    it('Should return the value itself ', ()=>{
        chai.expect(DefaultToAny(result,'not me', 'not me either')).to.equal(result)
    })
})