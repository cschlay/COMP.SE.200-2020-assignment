import clamp from '../src/clamp.js';
import chai from 'chai';

describe('clamp.js', ()=> {
    
    it('Number is exactly the lower bound returns the lower bound.', ()=>{
        chai.expect(clamp(1,1,2)).to.equal(1)
    })

    it('Number is between the bounds and not equal to lower or upper bound returns the number', ()=> {
        chai.expect(clamp(1,0,2)).to.equal(1)
    })

    it('Number is exactly the upper bound returns the upper bound.', ()=>{
        chai.expect(clamp(1,0,1)).to.equal(1)
    })

    it('Number is less than the lower bound returns the lower bound.', ()=>{
        chai.expect(clamp(-1,0,2)).to.equal(0)
    })

    it('Number is greater than the upper bound returns the upper bound',()=>{
        chai.expect(clamp(3,0,2)).to.equal(2)
    })
})