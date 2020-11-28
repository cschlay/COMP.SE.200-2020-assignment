import UpperFirst from '../src/upperFirst.js'
import chai from 'chai'

describe('UpperFirst.js',()=>{
    
    it('positive tests', ()=>{
        chai.expect(UpperFirst('ferrets')).to.equal('Ferrets')
        chai.expect(UpperFirst('Dog')).to.equal('Dog')
    })

    it('number first',()=>{
        chai.expect(UpperFirst('12apinaa')).to.equal('12apinaa')
    })
})