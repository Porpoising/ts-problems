const addTwoNumbers = (arr1, arr2) => {
    arr1 = inputArrToInt(arr1)
    arr2 = inputArrToInt(arr2)

    console.log(arr1, arr2)

    if (arr1.length < arr2.length) {
        return concatenateArrs(arr1, arr2)
    } else {
        return concatenateArrs(arr2, arr1)
    }

}

const inputArrToInt = (arr) => {
    return arr = Array.from(arr.split(' ').map((x) => {
        return parseInt(x)
    }))
}

const concatenateArrs = (arr1, arr2) => {
    for (let i = 0; i < arr2.length; i++) {
        if (arr1[i]) {
            arr2[i] += arr1[i]
        }

        if (arr2[i] >= 10) {
            if (arr2[i + 1]) {
                console.log('Entered block 1')
                arr2[i] -= 10
                arr2[i + 1] += 1
            } else {
                console.log('Entered block 2')
                arr2[i] -= 10
                arr2.push(1)
            }
        }
    }

    console.log(arr2)
    return arr2
}

