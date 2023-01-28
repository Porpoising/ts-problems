const twoSum = (nums, target) => {
    nums = Array.from(nums.split(' ').map((x) => {
        return parseInt(x)
    }))
    console.log(nums, target)

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === +target) {
                console.log("[" + i + ", " + j + "]")
                // return Array.of(nums.indexOf(nums[i]), nums.indexOf(nums[j]))
            }
        }
    }
}