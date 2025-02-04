// 1. Counting: create a function that prints out the numbers 1-10

const printOneToTen = () : string => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    for(const num of array) {
        console.log(num)
    }

    return 'done';
};


// 2. Evens: create a function that prints out the even numbers 1-20

const printEvensFromOneToTwenty = () : string => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    for(const num of array) {
        if(num % 2 == 0) {
            console.log(num)
        }
    }

    return 'done'
}

// console.log(printEvensFromOneToTwenty())

// 3. FizzBuzz: create a function that prints out the numbers 1-100. If the number is divisible by 3, print "Fizz" instead of the number. If the number is divisible by 5, print "Buzz" instead of the number. If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.

const fizzBuzz = () => {
    for(let i = 1; i <= 100; i++) {
        if(i % 3 == 0) {
            if(i % 5 == 0) {
                console.log('FizzBuzz')
            } else {
                console.log('Fizz')
            }
        } else if (i % 5 == 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }

    console.log('done')
}

fizzBuzz()