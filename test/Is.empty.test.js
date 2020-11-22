import isEmpty from '../src/isEmpty.js'
import chai from 'chai'

describe('IsEmpty.js',()=>{
    it('positive test', ()=>{
        var emptySet = new Set()
        chai.expect(isEmpty(emptySet)).to.equal(true)
        chai.expect(isEmpty(new Map())).to.be.true
    })
    it('negative test', ()=>{

        var mappy = ({firsth:1,second:'',},{firsth:2,second:''})
        var new_array = [1,2,3,4]

        chai.expect(isEmpty(mappy)).to.equal(false)
        chai.expect(isEmpty(new_array)).to.equal(false)
        chai.expect(isEmpty('abc')).to.equal(false)
    })
})