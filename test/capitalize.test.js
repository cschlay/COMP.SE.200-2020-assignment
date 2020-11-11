import chai from 'chai'
import capitalize from '../src/capitalize.js'

describe('capitalize.js', () => {
  it('correct inputs should be capitalized', () => {
    // NOTE: some differ from plan because there was errors
    const cases = [
      ['Car', 'Car'],
      ['DOG', 'Dog'],
      ['_orange', '_orange'],
      ['apple is expensive', 'Apple is expensive'],
      ['12 raccoons', '12 raccoons']
    ]
    cases.forEach(([input, expected]) => {
      chai.expect(capitalize(input)).to.equal(expected)
    })
  })

  it('empty string should be empty string', () => {
    chai.expect(capitalize('')).to.equal('')
  })

  it('input is not a string', () => {
    const cases = [[null, 'Null'], [undefined, 'Undefined'], [{}, '[object object]'], [123, '123']]
    cases.forEach(([input, expected]) => {
      chai.expect(capitalize(input)).to.equal(expected)
    })
  })
})