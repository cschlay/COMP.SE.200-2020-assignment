import drop from '../src/drop.js'
import chai from 'chai'

describe('drop.js', () => {
    it('drop the default amount 1', () => {
        chai.expect(drop(['cap', 'gloves'])).to.deep.equal(['gloves'])
    })

    it('array does not have elements', () => {
        chai.expect(drop([])).to.deep.equal([])
    })

    it('N is greater than the array results empty array', () => {
        chai.expect(drop([1, 2, 3], 4)).to.deep.equal([])
    })

    it('array is not an array but has length property', () => {
        chai.expect(drop({length: 2})).to.deep.equal([])            
    })

    it('array is null returns empty array', () => {
        chai.expect(drop(null)).to.deep.equal([])
    })
})