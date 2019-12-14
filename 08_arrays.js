/**
 * Task

Complete the getSecondLargest function in the editor below. 
It has one parameter: an array,nums, of n numbers. 
The function must find and return the second largest number in numbs.

Input Format

Locked stub code in the editor reads the following input from stdin and passes it to the function:
The first line contains an integer,n , denoting the size of the nums array.
The second line contains n space-separated numbers describing the elements in nums.
 */

let nums=[-6,-2,0,1,2,3,6,6,5,7,35,9,28];

function getSecondLargest(nums) {
    // Complete the function
    let largestNumber = nums[0];
    let secondLargest =nums[0];
    let smallestNumber =nums[0];

    for(i=0;i<nums.length;i++){
          if(largestNumber<nums[i]){
            secondLargest=largestNumber;
            largestNumber=nums[i]
          }
          else if(smallestNumber>nums[i]){
            smallestNumber=nums[i]
          }
          else if(secondLargest < nums[i] && largestNumber != nums[i]){
secondLargest = nums[i]
          }
    }
    return [smallestNumber,secondLargest,largestNumber];
}


console.log(getSecondLargest(nums));