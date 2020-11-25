import Keys from '../src/keys.js'
import chai from 'chai'

describe('Keys.js',()=>{
    it('testing with test function',()=>{
        function test_function() {
            this.a = 1
            this.b = 2
        }
        chai.expect(Keys(test_function)).to.equal(['a','b'])
    })
    it('testing different values',()=>{

        var nice_array = ['Watz','nakki','cat']
        
        chai.expect(Keys(nice_array)).to.equal(['0','1','2'])
        chai.expect(Keys(nice_array[1])).to.equal(['0','1'])
    })
})