/* ----- To Be or Not to Be ----- (CLOSURE)

Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
*/


/**
 * @param {string} val
 * @return {Object}
 */

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

let expect = function(val){

    
    const funcToBe = function (test){
    if (val === test) return true;
     else try {
        throw new Error('Not Equal');
    } catch(error){
        console.log(error.message);
    }
        return false
    }
    
    const funcNotToBe = function(test){
    if (val !== test) {
        return true;
    } else try{
    throw new Error('Equal')
    } catch (error){
        console.log(error.message);
    }
        return false
    }
    return validator ={
        toBe: funcToBe,
        notToBe: funcNotToBe
    }  
}


// a = expect(5).toBe(6);
// b = expect(7).notToBe(7);

console.log(expect(5).toBe(5));
console.log(expect(7).notToBe(6));