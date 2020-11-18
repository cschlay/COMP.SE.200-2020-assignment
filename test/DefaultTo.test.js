import DefaultTo from '../src/defaultTo.js'
import chai from 'chai'

describe('DefaultTo.js', ()=> {

    var defaultvalue = "default"

    var values = [NaN,null,undefined]

    it('Should return the default value',()=>{

        value.forEach(input => {
                
                chai.expect(DefaultTo(input,defaultvalue)).to.equal(defaultvalue)

            })
            
            
    })
    it('Should return the value itself', ()=>{

        defaultvalue = "not you";
        var value = "returns me"

        chai.expect(DefaultTo(value,defaultvalue)).to.equal(value)
    })
})