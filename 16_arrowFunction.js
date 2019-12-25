/**
 * Task
 * Complete the function in the editor. It has one parameter: an array, nums. 
 * It must iterate through the array performing one of the following actions on each element:
 * If the element is even, multiply the element by 2.
 * If the element is odd, multiply the element by 3.
 * The function must then return the modified array.
 */

 //Classic One

function modifyArray(nums) {
    let array = [];
    for(let i =0;i < nums.length;i++){
        if(nums[i]%2 == 0)
        array.push(nums[i]*2)
        else 
        array.push(nums[i]*3)
    }
    return array;
}

//Arrow Function

function modifyArrayTwo(nums){
   return nums.map((nums)=>{ return nums%2==0?nums*2:nums*3})
}

console.log(modifyArray([1,2,3,4,5]))
console.log(modifyArrayTwo([1,2,3,4,5]))


 