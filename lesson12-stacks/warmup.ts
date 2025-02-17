// 1. Given a string, return true if it contains only balanced parentheses '()'.
// Example: '()' => true, '(())' => true, '(()' => false
const validParentheses = (chars:string) :boolean => {
    const parentheses = {
        opening: 0,
        closing: 0
    }

    for(const char of chars) {

        if(parentheses.closing > parentheses.opening) {
            return false
        }

        if(char === '(') {
            parentheses.opening++
        } 
        if(char === ')') {
            parentheses.closing++
        }
    }


    return parentheses.opening == parentheses.closing
}

// console.log(validParentheses('()'))
// console.log(validParentheses('(())'))
// console.log(validParentheses('(()'))

// 2. Extend the above to include curly braces '{}' and square brackets '[]'.
// Example: '{[()]}' => true, '{[(])}' => false, '{{[[(())]]}}' => true

const validTags = (chars: string) :boolean => {
    const stack :string[] = [];
    const hash = {
        ')': '(', 
        ']': '[', 
        '}': '{' }

    for(const char of chars) {
       if(char in hash) {
            if(stack.length && stack[stack.length -1] === hash[char]) {
                stack.pop()
            } else {
                return false;
            }
       } else {
            stack.push(char)
       }
    }

    return stack.length === 0
}

// console.log(validTags('{[()]}'))
// console.log(validTags('{[(])}'))
// console.log(validTags('{{[[(())]]}}'))
 
// 3. Write a function to reverse a string using a stack.
// Example: 'hello' => 'olleh'

const reverseString = (word :string) :string => {
    let reversed ='';
    const letters = word.split('')
    while(letters.length) {
        reversed+= letters.pop()
    }

    return reversed
}


console.log(reverseString('hello'))
// 4. Given a string of operations ("PUSH x" or "POP"), implement a stack to process them.
// Example: ["PUSH 5", "PUSH 10", "POP"] => Top of Stack: 5

const operateStack = (commands:string[]) : number[] => {
    const stack : number[] = [];

    for(const command of commands) {
        if(command === 'POP') {
            stack.pop()
        } else {
            const seperatedConcerns = command.split(' ')
            stack.push(Number(seperatedConcerns[1]))
        }
    }

    return stack
}

console.log(operateStack(["PUSH 5", "PUSH 10", "POP"]))

// 5. Implement a function to simulate a browser's forward and back buttons using two stacks.

// Console.log each of your answers with the test cases provided.
