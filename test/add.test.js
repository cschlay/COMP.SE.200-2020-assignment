import add from '../src/add.js'
import chai from 'chai'

describe('add.js', () => {
  it('adds positive numbers', () => {
    chai.expect(add(9.5, 100)).to.equal(109.5)
  })

  it('adds negative numbers', () => {
    chai.expect(add(-999, -1)).to.equal(-1000)
  })

  it('adds a negative and a positive number', () => {
    chai.expect(add(-900, 100)).to.equal(-800)
    chai.expect(add(900, -100)).to.equal(800)
  })

  describe('augend is not a number', () => {
    const augend = Math.floor(Math.random() * 10000 - Math.random() * 10000)
    it('addend is empty string', () => {
      chai.expect(add(augend, '')).to.equal(augend.toString())
    })
    it('addend is null or undefined', () => {
      chai.expect(add(augend, null)).to.equal(augend)
      chai.expect(add(augend, undefined)).to.equal(augend)
    })
    it('addednd is a object', () => {
      chai.expect(add(augend, { json: '' })).to.be.NaN
    })
    it('addend is a function', () => {
      chai.expect(add(augend, () => {})).to.be.NaN
    })
    it('addend is a string', () => {
      // This case concatenates, i think it shouldn't do it.
      chai.expect(add(augend, 'str')).to.be.NaN
    })
    it('addend is an array', () => {
      chai.expect(add(augend, [3])).to.be.NaN
    })
  })
})
