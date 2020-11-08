import at from '../src/at.js'
import chai from 'chai'

describe('at.js', () => {
  it('simple path', () => {
    chai.expect(at({'a': 1}, ['a'])).to.deep.equal([1])
  })

  describe('complex object "house"', () => {
    const obj = {
      house: {
        toilets: [
          [
            'sink',
            'squatToilet'
          ],
          [
            'bidet',
            'ordinaryToilet'
          ]
        ],
        kitchen: {
          fridge: ['cake', 'iceCream']
        }
      }
    }

    it('the first items in "fridge"', () => {
      chai.expect(at(obj, 'house.kitchen.fridge[0]', 'house.kitchen.fridge[1]')).to.deep.equal(['cake', 'iceCream'])
    })

    it('squatToilet in first toilet', () => {
      chai.expect(at(obj, 'house.toilets[0][1]')).to.deep.equal(['squatToilet'])
    })

    it('the contents of house', () => {
      chai.expect(at(obj, 'house.toilets', 'house.kitchen.fridge'), [
        [
          ['sink','squatToilet'],
          ['bidet','ordinaryToilet'],
          ['cake', 'iceCream']
        ]
      ])
    })
  })

  it('object is empty', () => {
    chai.expect(at({}, 'wardrobe.jacket')).to.deep.equal([undefined])
  })
})
