// 1. Given an integer, n,  between 3 and 100, return a line with n '*' characters

// 5 => '*****'
// 12 => '************'
// 3 => "***"

const formStarLine = (starCount: number) : string => {
    if(starCount < 3 || starCount > 100) {
        return 'Count must be between 3 and 100';
    };

    return '*'.repeat(starCount);
}

// 2. Given an integer, n, between 3 and 100,
// return a line n characters long where the first and last character are '*' and all the middle characters are a space.

// 5 => '*   *'
// 12 => '*          *'

const formStarBorder = (lineLength: number) : string => {
    if(lineLength < 3 || lineLength > 100) {
        return 'Count must be between 3 and 100';
    };

    return '*' + ' '.repeat((lineLength - 2)) + '*';
}

// 3. Given two integers, n and m, create n lines of m characters. The first and last line should be made of all '*' and all the middle lines should start and end with '*' and have all spaces in the middle

// 5,5 => *****
//        *   *
//        *   *
//        *   *
//        *****

const formStarBox = (lineCount: number, charCount: number) : string => {
    let starBox = formStarLine(charCount) + '\n';
    let counts  = 1;

    do {
        starBox = starBox.concat(formStarBorder(charCount) + '\n');
        counts++; 
    } while (counts < lineCount);

    return starBox.concat(formStarLine(charCount));
}

console.log(formStarBox(5,5));

// Console.log the result of each of the above functions to test them. Run your file with node warmup.js and check the terminal for the correct output.
