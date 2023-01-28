const longestPalindrome = function (initialString) {
    if (initialString.length === 1) {
        console.log(initialString);
        return initialString
    }

    let palindrome = initialString[0]

    for (let start = 0; start < initialString.length; start++) {
        for (let end = initialString.length; end !== start + 2; end--) { //abbsbbbbs 
            let substr = initialString.slice(start, end)
            palindrome = checkCorners(palindrome, substr, substr)
            delete substr
        }
    }

    console.log(palindrome)
    return palindrome

    //     [start, step] = [0, 2]
    //     let palindrome = initialString[0]

    //     while (true) {
    //         let substr = initialString.slice(start, step)
    //         console.log(substr);



    //         if (substr.length === 1) {
    //             break
    //         }

    //         if (substr === reverse(substr)) { // //[...substr].reverse().join("")
    //             palindrome = palindrome.length < substr.length ? substr : palindrome
    //         }

    //         if (!initialString[step]) {
    //             start++
    //             step = start + 2
    //             console.log('Entered reset block:', start, step);
    //             continue
    //         }
    //         step++
    //     }

    //     console.log(palindrome)
    //     return palindrome
    // }

    // const reverse = function (string) {
    //     if (string === '') {
    //         return '';
    //     } else {
    //         return reverse(string.substr(1)) + string.charAt(0)
    //     }
}

const checkCorners = function (palindrome, slice, substr) {
    console.log('-----------------------------');
    console.log(substr, slice);

    if (slice[0] === slice.at(-1) && slice.length <= 3) {
        console.log('Entered block 1');
        return palindrome.length < substr.length ? substr : palindrome

    } else if (slice[0] === slice.at(-1)) {
        console.log('Entered block 2');
        return checkCorners(palindrome, slice.slice(1, -1), substr)

    } else {
        console.log('Returned palindrome:', palindrome);
        return palindrome
    }
}