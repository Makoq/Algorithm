//给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

//请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

//你可以假设 nums1 和 nums2 不会同时为空。

//示例 1:

//nums1 = [1, 3]
//nums2 = [2]

//则中位数是 2.0
//示例 2:

//nums1 = [1, 2]
//nums2 = [3, 4]

//则中位数是 (2 + 3)/2 = 2.5
 

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    
    if(nums1.length===0&&nums2.length===0){
            return 0.0
       }
    
    let arr=[],i=0,j=0
    
    
    while(nums1[i]!=null&&nums2[j]!=null){
        
        if(nums1[i]<nums2[j]){
                arr.push(nums1[i])
                i++
         }else if(nums1[i]===nums2[j]){
             arr.push(nums1[i])
              arr.push(nums1[i])
             i++;
             j++;
         }else{
             arr.push(nums2[j])
             j++;
         }
        
    }
    
    
    if(nums1[i]){
       arr=arr.concat(nums1.slice(i,nums1.length)) 
    }
    if(nums2[j]){
       arr=arr.concat(nums2.slice(j,nums2.length))
    }
    
    let len=arr.length
    if(len%2===0){
        return parseFloat(arr[len/2-1]+arr[len/2])/2
    }else{
        return parseFloat(arr[(len-1)/2])
    }
    
};
