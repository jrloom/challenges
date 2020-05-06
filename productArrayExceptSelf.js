/*
? Given an array nums of n integers where n > 1,  return an array output such that 
? output[i] is equal to the product of all the elements of nums except nums[i].

! Constraint: It's guaranteed that the product of the elements of any prefix or 
! suffix of the array (including the whole array) fits in a 32 bit integer.

* Note: Please solve it without division and in O(n).
*/

/*
 * so, if input is [1, 2, 3, 4], output is [(2*3*4), (1*3*4), (1*2*4), (1*2*3)] ie [24, 12, 8, 6]
 * Use an empty array to return
 * Use a variable to hold right side values
 * First, iterate left to right, store in 'result'
 * Update 'result' with a second iteration, right to left (stored in 'right')
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  let result = []
  let right = 1
  result[0] = 1

  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i - 1]
    // console.log(`left to right ${result[i]}`)
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = right * result[i]
    // console.log(`update result, right to left ${result[i]}`)
    right = right * nums[i]
    // console.log(`right ${right}`)
  }

  return result
}

const input = [1, 2, 3, 4]

console.log(`output ==> ${productExceptSelf(input)}`)
