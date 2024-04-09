var searchRange = function(nums, target) {
    if (nums.length === 0){return [-1, -1];}
    let x = fistElement(nums, 0, nums.length-1, target);
    let y = lastElement(nums, 0, nums.length-1, target);
    return [x, y];
}
function fistElement(nums, l, r, target) {
    if (nums[l] === target){return l;}
    if ((l === r )||(r === l+1)){
        if (nums[r] === target){return r;}
        else {return -1;}
    }
    let m = Math.floor((l+r)/2);
    if (nums[m] < target){
        return fistElement(nums, m+1, r, target);
    }
    return fistElement(nums, l, m, target);
}
function lastElement(nums, l, r, target) {
    if (nums[r] === target){return r;}
    if (l === r || r === l+1){
        if (nums[l] === target){return l;}
        else {return -1;}
    }
    let m = Math.floor((l+r)/2);
    if (nums[m] > target){
        return lastElement(nums, l, m-1, target);
    }
    return lastElement(nums, m, r, target);
}
const nums = [5,7,7,8,8,10];
console.log(searchRange(nums, 8));