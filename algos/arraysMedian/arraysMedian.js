// arr1 = [1, 21, 35, 92, 100, 201] // length = 6
// arr2 = [2, 4, 23, 37, 45, 46, 102, 175] // length = 8
// sorted = [1, 2, 4, 21, 23, 35, 37, 45, 46, 92, 100, 102, 175, 201] // median = (45 + 37) / 2 = 41
// median_index = 7 [0, ..., 14]

// m = 6, n = 8
// halfLen = 7
// i = 3
// j = 4
// maxOfLeft = 37
// 

function findMedian(nums1, nums2) { // решение нейронки
    if (nums1.length > nums2.length) {
      [nums1, nums2] = [nums2, nums1];
    }
  
    const m = nums1.length; // 6
    const n = nums2.length; // 6
    if (n === 0) {
      throw new Error("ValueError");
    }
    // [1, 2, 3, 7, 8, 9]; [4, 5, 6, 10, 11, 12]  --> (6 + 7) / 2 = 6.5
  
    let imin = 0; 
    let imax = m; // 6
    const halfLen = Math.floor((m + n + 1) / 2);
    while (imin <= imax) {
      const i = Math.floor((imin + imax) / 2);
      const j = halfLen - i;
      if (i < m && nums2[j - 1] > nums1[i]) {
        // i is too small, must increase it
        imin = i + 1;
      } else if (i > 0 && nums1[i - 1] > nums2[j]) {
        // i is too big, must decrease it
        imax = i - 1;
      } else {
        // i is perfect
  
        let maxOfLeft;
        if (i === 0) {
          maxOfLeft = nums2[j - 1];
        } else if (j === 0) {
          maxOfLeft = nums1[i - 1];
        } else {
          maxOfLeft = Math.max(nums1[i - 1], nums2[j - 1]);
        }
  
        if ((m + n) % 2 === 1) {
          return maxOfLeft;
        }
  
        let minOfRight;
        if (i === m) {
          minOfRight = nums2[j];
        } else if (j === n) {
          minOfRight = nums1[i];
        } else {
          minOfRight = Math.min(nums1[i], nums2[j]);
        }
  
        return (maxOfLeft + minOfRight) / 2; 
      }
    }
  }

// const findMedian = (arr1, arr2) => {
//     arr1 = inputArrToInt(arr1)
//     arr2 = inputArrToInt(arr2)

//     if (arr1.length > arr2.length) {
//         [arr1, arr2] = [arr2, arr1];
//       }

//     console.log(arr1, arr2)

    // let arrLength = arr1.length + arr2.length
    // let medianIndex = null

    // if (arrLength % 2 === 0) {
    //     medianIndex = [arrLength / 2 - 1, arrLength / 2]
    // } else {
    //     medianIndex = Math.floor(arrLength / 2) 
    // }

    // console.log(medianIndex)
    
    
    // while (true) {
        
    // }
// }

// const inputArrToInt = (arr) => {
//     return arr = Array.from(arr.split(' ').map((x) => {
//         return parseInt(x)
//     }))
// }

// const concatArrs = (arr1, arr2) => {
//     return arr1.concat(arr2)
// }
