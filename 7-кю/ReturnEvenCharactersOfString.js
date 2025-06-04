function evenChars(string) {

    if (string.length < 101 && string.length > 1) {
        let result = ''
        for (let i = 1; i < string.length; i += 2) {
            result += string[i]
        }
        return result.split('')
    }
    else {
        return "invalid string"
    }
}