const leafSimilar = function (
    // root1,
    // root2
) {
    const root1 = [1, 2, 3, 4, null, null, 5]
    const root2 = [1, 3, 2, 4, 5, 6, 7, 9, 8, 10, 11, 13, 14, 16, 17, 12, null, null, null, 15, null, null, null, 16, 17, null, 19, null, 20, 21, null]

    const initialKey1 = root1[0]
    const initialKey2 = root2[0]

    const leafsObj1 = {}
    const leafsObj2 = {}
    const valSequence1 = []
    const valSequence2 = []
    let step = 0

    for (let i = 0; i < root1.length; i++) {
        let root = root1[i]
        let left = root1[i + 1 + step]
        let right = root1[i + 2 + step]

        if (root) {
            leafsObj1[root] = [left, right]
            step += 1
        } else {
            step += 1
        }
    }

    step = 0
    for (let i = 0; i < root2.length; i++) {
        let root = root2[i]
        let left = root2[i + 1 + step]
        let right = root2[i + 2 + step]

        if (root && left && right) {
            leafsObj2[root] = [left, right]
            step += 1
        } else {
            step += 1
        }
    }

    console.log(leafsObj1);
    console.log(leafsObj2);

    // console.log(leafsObj1[initialKey1])
    childGuesser(leafsObj1[initialKey1], leafsObj1, valSequence1)
    childGuesser(leafsObj2[initialKey2], leafsObj2, valSequence2)

    console.log(valSequence1);
    console.log(valSequence2);
    console.log(JSON.stringify(valSequence1) === JSON.stringify(valSequence2))
}

const childGuesser = function (valArr, leafsObj, valSequence) {
    let left = valArr[0]
    let right = valArr[1]
    console.log(left, right);

    childCheck(left, leafsObj, valSequence)
    childCheck(right, leafsObj, valSequence)

    // console.log(valSequence);

    // if (left in leafsObj.keys()) {
    //     childGuesser(leafsObj[left], leafsObj, valSequence)
    // } else {
    //     valSequence.push(left)
    // }

    // if (right in leafsObj.keys()) {
    //     childGuesser(leafsObj[right], leafsObj, valSequence)
    // } else {
    //     valSequence.push(right)
    // }
    return
}

const childCheck = function (value, leafsObj, valSequence) {
    if (Object.keys(leafsObj).includes(value.toString())) {
        childGuesser(leafsObj[value], leafsObj, valSequence)
    } else {
        valSequence.push(value)
    }
    return
}