// 1. given a string with three characters, return the second character

const returnSecondChar = (str: string) : string => {
    return str[1];
}

// 2. get the second and third char from a string. the string will always have atleast three characters

// 'cat' => 'at'
// 'robbed' => 'ob'

const readSecondAndThirdChar = (str: string) : string => {
    return returnSecondChar(str) + str[2];
}

// 3. Given a word with 5 letters, return the second through 5th letter

const getSecondThroughFifthLetter = (word: string) : string => {
  return word.slice(1);
}

// console.log(getSecondThroughFifthLetter('table'))

// 4. given a string and a number called N, return the second through the Nth character

// 'schoolbus', 5 => 'choo'
// 'telephone', 6 => 'eleph

// slice is a ?? method: array and also a string method
// splice is a array method

const readSecondThroughNth = (word: string, N: number) : string => {
    return word.slice(1, N)
}

// console.log(readSecondThroughNth('schoolbus', 5))

// 5. Given an array of booleans, return an arrray of only false elements

// [true, true, false, true , false] => [false, false]

const saveTheFalsey = (bools: boolean[]) : boolean[] => {
    const falseys : boolean[] = [];

    for(let i = 0; i < bools.length; ++i) {
        if(!bools[i]) {
            falseys.push(false);
        }
    }

    return falseys;
}

// console.log(saveTheFalsey([true, true, false, true , false]))

// 6. given a string with two words, put ' the ' between the words and return the string

// 'to beach' => 'to the beach'
// 'for real' => 'for the real'
// 'jim john' => 'jim the john'
// 'to house' => 'to the house'

const addTheToMiddle  = (words: string) : string => {
    return words.split(' ').join(' the ');
}


// 7.  given two numbers, price and discount, return the price after the discount is applied

const calculateDiscountPrice = (price: number, discount: number) : number => {
    if(typeof price !== 'number' || typeof discount !== 'number') {
        throw TypeError('Price and discount must be numbers');
    }

    return price - (price * (discount / 100));
}

// console.log(calculateDiscountPrice(50, 0))

export { calculateDiscountPrice };
// price is 100 and discount is 15

// 100, 15 => 85

// 70, 3 => 67.9

// Console.log each of your answers with the test cases provided. Attempt to write each one with TDD.
