function reverseString(str: string) : string {
    return str.split('').reverse().join('')
}

console.log(reverseString("Hello, World!"));
// Expected Output: "!dlroW ,olleH"

function capitalizeWords(str: string) : string {
    const wordsArr: string[] =  str.split(' ');

    for(let i = 0; i < wordsArr.length; ++i) {
        wordsArr[i] = wordsArr[i].charAt(0).toUpperCase() + wordsArr[i].substring(1)
    }

    return wordsArr.join(' ');
};

console.log(capitalizeWords("hello, world!"));
// Expected Output: 'Hello, World!'

console.log(capitalizeWords("javascript is awesome"));
// Expected Output: 'Javascript Is Awesome'

function countVowels(str: string) : number {
    const vowels = {
        'a': true,
        'e': true,
        'i': true,
        'o': true,
        'u': true
    };

    let vowelCount = 0;

    for(let i = 0; i < str.length; ++i) {
        if(vowels[str[i]]) {
            vowelCount++
        }
    }

    return vowelCount
}

console.log(countVowels("hello"));
// Expected Output: 2

console.log(countVowels("programming"));
// Expected Output: 3
