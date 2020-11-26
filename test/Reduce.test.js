import Reduce from '../src/reduce.js'
import chai from 'chai'

describe('Reduce.js',()=>{

    function sort_new(result, value, key){
            (result[value] || (result[value] = [])).push(key)
            return result
         }
    function sorter(array,n=null){
        
        if(n != null){
            array.push(n)
        }
         
        array.sort(function(a, b){return a-b});
            
        return array
    }

    function summing(sum,n){
        return sum + n
    }
    it('test with a long array',()=>{
        var array = [4,78,3,98,23,15,100]
        chai.expect(Reduce(array,summing,0)).to.equal(321)
        chai.expect(Reduce(array,sorter,[])).to.deep.equal(sorter(array))
    })
    it('test with a map',()=>{
         
        chai.expect(Reduce({'1': 1, 'a': 2, 'b': 3, 'c': 3},sort_new,{})).
        to.deep.equal({1: ['1'],2: ['a'], 3: ['b', 'c']})

        chai.expect(Reduce({'a':1, 'b':2, 'c':1}, sort_new, {})).
        to.deep.equal({1: ['a','c'], 2:['b']})
    })
       
       })     
