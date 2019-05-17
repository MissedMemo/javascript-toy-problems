/****************************************************************************************
 (from leetcode) : for an array of integers, return indices of the two elements whose
 sum equals the specified target.
 
 e.g. array [2, 7, 11, 15] with a target of 9 resolves to index values 0 & 1 (2 + 7 = 9)
 
 ***************************************************************************************/

/*
const twoSum = (nums, target) => {

  const results = []

  for( let i = 0; i < nums.length; i++ ) {
    for( let i2 = 0; i2 < nums.length; i2++ ) {
      const n = nums[i]
      const n2 = nums[i2]
      if ( n + n2 === target ) {
        return [i, i2]
      }
    }
  }
};
*/

const twoSum = (nums, target) => nums.reduce( (indices, nCurrent, i) => {
  if ( nums.find( n => n + nCurrent === target) ) {
    indices.push(i)
  }
  return indices
}, [] );

console.log( 'indices for twoSum([2,7,11,15], 9): %o (should be [0,1])', twoSum([2,7,11,15], 9) )
console.log( 'indices for twoSum([2,7,11,15], 13): %o (should be [0,2])', twoSum([2,7,11,15], 13) )
console.log( 'indices for twoSum([2,7,11,15], 13): %o (should be [0,3])', twoSum([2,7,11,15], 17) )
console.log( 'indices for twoSum([2,7,11,15], 18): %o (should be [1,2])', twoSum([2,7,11,15], 18) )
console.log( 'indices for twoSum([2,7,11,15], 26): %o (should be [2,3])', twoSum([2,7,11,15], 26) )
console.log( 'indices for twoSum([3,2,4], 6): %o (should be [1,2])', twoSum([3,2,4], 6) )
