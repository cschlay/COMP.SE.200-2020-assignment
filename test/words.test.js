import words from '../src/words.js'
import chai from 'chai'

describe('words.js',()=>{
    it('seperate with ,',()=>{
        chai.expect(words('12, reanimated, armed, bears,')).to.deep.equal(['12' , 'reanimated', 'armed', 'bears'])
    })
    it('seperate with space',()=>{
        chai.expect(words('4 vampires robbed blood bank', /[^, ]+/g)).to.deep.equal(['4', 'vampires', 'robbed', 'blood', 'bank'])
    })
})