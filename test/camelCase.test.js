import camelCase from '../src/camelCase.js'
import chai from 'chai'

describe('camelCase.js', () => {
  it('correct inputs should properly camelCased', () => {
    const cases = [
      ['a', 'a'],
      ['electricjet', 'electricjet'],
      ['waterBottle', 'waterBottle'],
      ['canned tuna', 'cannedTuna'],
      ['canned-chicken', 'cannedChicken'],
      [' canned pig', 'cannedPig'],
      ['A Cat Eats 10 salmon', 'aCatEats10Salmon'],
      ['GOLD COIN', 'goldCoin']
    ]

    cases.forEach(([input, expected]) => {
      chai.expect(camelCase(input)).to.equal(expected)
    })
  })

  it('empty string should be empty', () => {
    chai.expect(camelCase('')).to.equal('')
  })

  it('input is not string', () => {
    const cases = [[null, 'null'], [undefined, 'undefined'], [{}, '{}'], [123, '123']]
    cases.forEach(([input, expected]) => {
      chai.expect(camelCase(input)).to.equal(expected)
    })
  })
})
