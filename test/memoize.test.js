import memoize from '../src/memoize.js'
import chai from 'chai'

// The returned values is Map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
describe('memoize.js', () => {
    it('basic input of array without resolver', () => {
        const data = memoize(() => [9, 3, 4, 8])
        // Should not have any key since array was given.
        chai.expect([...data.cache].length).to.equal(0)
    })

    it('basic input of an object without resolver', () => {
        const data = memoize(() => ({9: 3, 4: 8}))
        chai.expect(data.cache.get(9)).to.equal(3)
        chai.expect(data.cache.get(4)).to.equal(8)
    })

    it('basic input of an object with resolver', () => {
        const data = memoize(() => ({9: 3, 4: 8}), (key) => {
            if (key === 9) {
                return 'guard'
            }
            return key
        })
        chai.expect(data.cache.get('guard')).to.equal(3)
        chai.expect(data.cache.get(4)).to.equal(8)
    })
})