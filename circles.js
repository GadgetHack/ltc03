var nums = [1,1,2,3,5,8,13,21];
var sum = 0;
var i = 0;
var mult = nums[0];
while (i < nums.length) {
  sum = sum + nums[i];
  i = i+1;
}

console.log(sum);


for (var i = 2; i < nums.length; i = i+2) {
    mult = mult * nums[i];

   
console.log("step 1", nums[i]);
}



console.log(mult)
