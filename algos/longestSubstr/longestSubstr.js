const lengthOfLongestSubstr = (string) => {
    let substr = ''
    let substrLongest = 0
    done = false

    for (let j = 0; j < string.length; j++) {
        if (done) {
            break
        }

        substr = ''
        for (let i = j; i < string.length; i++) {
            if (substr.includes(string[i])) {
                substrLongest = (substrLongest < substr.length ? substr.length : substrLongest)
                break
            } else {
                substr += string[i]
            }

            if (substr.length === string.length || i === string.length - 1) {
                substrLongest = (substrLongest < substr.length ? substr.length : substrLongest)
                done = true
            }
        }
    }

    console.log(substrLongest)
    return substrLongest
}