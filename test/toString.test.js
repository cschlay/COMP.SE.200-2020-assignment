import toString from '../src/toString.js'
import chai from 'chai'

describe('toString.js',()=>{

    var values = [-34,12,5.2,9]
    var goal = ['-34','12','5.2','9']

    var more_values = ['kuusi',2,0.95, -0]
    var more_goal =['kuusi','2','0.95','-0']

    var index = 0

    values.forEach(element => {
        it(`${element} from array to string`,()=>{
            chai.expect(toString(element)).to.equal(goal[index])
            ++index
        })
    })
    var new_index = 0
    more_values.forEach(input => {
        
        it(`${input} from more_array to string`,()=>{
            chai.expect(toString(input)).to.equal(more_goal[new_index])
            ++new_index
        })
    })
        chai.expect(toString(7)).to.equal('7')
    
})