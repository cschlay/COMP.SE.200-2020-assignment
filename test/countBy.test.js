import countBy from '../src/countBy.js'
import chai from 'chai'

describe('countBy.js', () => {
    it('expected input should return the count object', () => {
        chai.expect(countBy(['in', 'out', 'in'], (item) => item === 'in')).to.deep.equal({'true': 2, 'false': 1})
    })
    
    it('input should count values', () => {
        chai.expect(
            countBy({'car': 'in', 'bike': 'in', 'train': 'in'}, 
            (item) => item === 'in'
        )).to.deep.equal({
            'true': 3,
            'false': 0
        })
    })

    describe('array is not an iterable', () => {
        it('input is number 1000', () => {
            chai.expect(countBy(1000, (item) => item === 'in')).to.deep.equal({})
        })

        it('input is null', () => {
            chai.expect(countBy(null, (item) => item === 'in')).to.deep.equal({})
        })

        
        it('input is undefined', () => {
            chai.expect(countBy(undefined, (item) => item === 'in')).to.deep.equal({})
        })
    })
})
