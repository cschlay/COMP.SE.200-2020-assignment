import isDate from '../src/isDate.js'
import chai from 'chai'

describe('isDate.js', ()=>{
    it('check if input is type Date', ()=>{
        chai.expect(isDate(2020,2,29)).to.be.false
    })
    it('poisitve test on isdate', ()=>{
        chai.expect(isDate(new Date(2020,2,29))).to.be.true
    })
})