function sum(int1, int2) {

    if(!Number.isInteger(int1) || !Number.isInteger(int2)) {
        throw TypeError("functiion needs an integer");
    };

    return int1 + int2;
}

/** 
 * test("function should throw if either num is not an int", () => {
 * expect(sum(1.4, 2))
 * })
 */