import eq from '../src/eq.js'
import chai from 'chai'

describe('eq.js', () => {
    it('strings compare properly', () => {
        chai.expect(eq('mozart', 'mozart')).to.be.true
        chai.expect(eq('vivaldi', 'mozart')).to.be.false
        chai.expect(eq('', '')).to.be.true
    })

    it('number compare properly', () => {
        chai.expect(eq(1, 1)).to.be.true
        chai.expect(eq(-1,-1)).to.be.true
        chai.expect(eq(0, 0)).to.be.true
        chai.expect(eq(NaN, NaN)).to.be.true
        chai.expect(eq(1, -1)).to.be.false
    })

    it('arrays compare properly', () => {
        chai.expect(eq([], [])).to.be.false
        chai.expect(eq([1, 1], [1])).to.be.false
        const arr = []
        chai.expect(eq(arr, arr)).to.be.true
    })

    it 

    it('object compare properly', () => {
        chai.expect(eq({}, {})).to.be.false
        const obj = {}
        chai.expect(eq(obj, obj)).to.be.true
    })

    it('boolean compare properly', () => {
        chai.expect(eq(true, true)).to.be.true
        chai.expect(eq(false, false)).to.be.true
        chai.expect(eq(false, true)).to.be.false
        chai.expect(eq(true, false)).to.be.false
    })

    it('empty input should be true', () => {
        // unsafe but specs says it to be true
        chai.expect(eq()).to.be.true
    })

    it('functions should compare properly', () => {
        chai.expect(eq(() => {}, () => {})).to.be.false
        const func = () => {}
        chai.expect(eq(func, func)).to.be.true
    })

    describe('different types should be false', () => {
        const cases = [
            ['str', 123],
            ['str', []],
            ['str', undefined],
            ['str', null],
            ['str', () => {}],
            ['str', true],
            ['str', {}],
            [123, []],
            [123, undefined],
            [123, null],
            [123, () => {}],
            [123, true],
            [123, {}],
            [{}, undefined],
            [{}, null],
            [() => {}, []],
            [() => {}, undefined],
            [() => {}, null],
            [null, undefined],
        ]
        
        cases.forEach(([input1, input2]) => {
            it(`comparing ${input1} and ${input2} should be false`, () => {
                chai.expect(eq(input1, input2)).to.be.false
                chai.expect(eq(input2, input1)).to.be.false
            })
        })
    })
})