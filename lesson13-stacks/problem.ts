/**
 * Given a string containing just the characters '(', ')'.
 *
 * We will say this string is considered valid if:
 * 1. Open brackets must be closed by close brackets.
 * 2. Open brackets must be closed in the correct order.
 *
 * For example, "()" and "()(())" are valid but "())" and "()(()" are not.
 *
 * @param {string} s
 * @return {boolean}
 */
const isValid = (string: string) :boolean  => {
    const stack : string[] = [];
    const hashMap = {
        ')' : '('
    }

    for(const char of string) {
        if(char in hashMap) {
            if(stack.length && stack[stack.length -1] === hashMap[char]) {
                stack.pop()
            } else {
                return false
            }
        } else {
            stack.push(char)
        }
    };


    return stack.length === 0;
}

module.exports = isValid;
