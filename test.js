function part(nums,l,r){
    let tep=nums[l]
    while(l<r){
        while(l<r&&nums[r]>=tep) r--
        nums[r]=nums[l]
        while(l<r&&nums[l]<=tep) l++
        nums[l]=nums[r]
        
    }
    nums[l]=tep
    return l
    
}


function quickSort(nums,l,r){
    while(l<r){
        let pos=part(nums,l,r)
        quickSort(nums,l,pos+1)
        quickSort(nums,pos-1,r)
    }
}
let nums=[1,4,6,2]

quickSort(nums,0,3)

console.log(nums)