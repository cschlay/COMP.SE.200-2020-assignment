import toNumber from '../src/toNumber.js'
import chai from 'chai'

    describe('toNumber.js',()=>{
        it('convert to float',()=>{
            chai.expect(toNumber('3.145')).equal(3.145)
            chai.expect(toNumber('-360.15')).to.equal(-360.15)
        })
        it('negative test',()=>{
            chai.expect(toNumber('12kuusi')).to.deep.equal(NaN)
        })
    })
   