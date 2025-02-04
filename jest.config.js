export default {
    testEnvironment: "node",
    transform: {
        "^.+\\.(t|j)sx?$": ["@swc/jest"],
    },
    moduleFileExtensions: ["ts", "js", "json"],
    testEnvironment: "node",
    extensionsToTreatAsEsm: [".ts"],
    moduleNameMapper: {
        "^(\\,{1,2}/.*)\\.js$": "$1"
    }
};