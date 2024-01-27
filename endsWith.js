function solution(str, ending){
    if (str.endsWith(ending)){
      return true
    } else{
      return false
    }
   }

console.log(solution('abc', 'bc'))
console.log(solution('wxyz', 'xyz'))
console.log(solution('xuty', 'bc'))
console.log(solution('bc', 'c'))