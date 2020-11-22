import filter from '../src/filter.js'
import chai from 'chai'

describe('filter.js', () => {
    it('basic case with simple function result in false element', () => {
        chai.expect(filter(['euro', 'dollar'], (item, index, array) => item !== 'dollar')).to.deep.equal(['euro'])
    })

    it('basic case with simple function that result in true', () => {
        chai.expect(filter(['euro'], (item, index, array) => item === 'euro')).to.deep.equal(['euro'])
    })

    it('array is not array should throw error', () => {
        chai.expect(() => filter(1232, () => {
            return false
        })).to.throw(TypeError)
    })

    it('predicate not being function should throw error', () => {
        chai.expect(() => filter([23], 'not func')).to.throw(TypeError)
    })
})