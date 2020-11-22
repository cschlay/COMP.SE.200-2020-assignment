import get from '../src/get.js'
import chai from 'chai'

describe('get.js', () => {
    it('accessing simple object values', () => {
        chai.expect(
            get({'here': true}, 'here', false)
        ).to.be.true
    })

    it('accessing simple array values', () => {
        chai.expect(
            get(['sushi', 'sashimi'], 1)
        ).to.equal('sashimi')
    })

    it('the item doesn\'t exist should result in default value', () => {
        chai.expect(
            get({'sushi': {'kappamaki': true}, 'sashimi': false}, 'sashimi.tuna', 'salmon')
        ).to.equal('salmon')
    })

    describe('path is invalid should return default', () => {
        const cases = [
            398,
            undefined,
            null,
            () => {},
            {},
            []
        ]

        cases.forEach((path) => {
            it(`path ${path} should result default`, () => {
                chai.expect(
                    get({'sushi': {'kappamaki': true}, 'sashimi': false}, path, 'default')
                ).to.equal('default')
            })
        })
    })
})
