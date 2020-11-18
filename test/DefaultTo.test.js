import DefaultTo from '../src/defaultTo.js'
import chai from 'chai'

describe('DefaultTo.js', ()=> {

    var defaultvalue = "default"

    var values = [NaN,null,undefined]

        values.forEach(input => {
                it(`Should return the default value with input ${input}`,()=>{
                    chai.expect(DefaultTo(input,defaultvalue)).to.equal(defaultvalue)
            })
    })
    
    it('Should return the value itself', ()=>{

        defaultvalue = "not you";
        var value = "returns me"

        chai.expect(DefaultTo(value,defaultvalue)).to.equal(value)
    })
})