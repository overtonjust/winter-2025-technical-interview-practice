// Please use array methods such as .map(), .filter(), .reduce(), .every(), .some(), and .find() to solve the following prompts.

// Prompt 1: Write a function that takes an array of numbers as input and returns a new array with only the even numbers.

const filterEvens = (nums: number[]) : number[] => {
    return nums.filter(num => num % 2 == 0)
};

// console.log(filterEvens([1,2,3,4,5,6,7,8]))

// Prompt 2: Write a function that takes an array of strings as input and returns a new array with the lengths of each string.

const mapArrayLengths = (arr: string[]) : number[] => {
    return arr.map(ele => ele.length)
};

// console.log(mapArrayLengths(['two','ten','table', 'sandwich']))

// Prompt 3: Write a function that takes an array of objects representing students, where each object has a "name" and "age" property. Return a new array with only the names of the students who are above 18 years old.


const findAdultStudents = (students: {name: string, age: number}[]) : object[] => {
    return students.filter(student => student.age > 18)
};

// console.log(findAdultStudents([{name: 'james', age: 2}, {name: 'sally', age: 22}]))

