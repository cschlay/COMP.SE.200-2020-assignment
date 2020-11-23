import isSymbol from '../src/isSymbol.js'
import chai from 'chai'

describe('isSymbol.js',()=>{
    it('input is not symbol',()=>{
        chai.expect(isSymbol(3900)).to.equal(false)
    })
    it('input is symbol',()=>{
        var new_symbol = Symbol.iterator
        chai.expect(isSymbol(new_symbol)).to.equal(true)
    })
})