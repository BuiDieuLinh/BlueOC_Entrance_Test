function mostFrequentLength(arr) {
    const count = {}; 
    let maxFreq = 0;
    
    for (let i = 0; i < arr.length; i++) {
        const len = arr[i].length;  
        if (count[len] === undefined) {
            count[len] = 1;       
        } else {
            count[len] += 1;      
        }
    }

    for (const len in count) {
        if (count[len] > maxFreq) {
            maxFreq = count[len];
        }
    };

    const result = arr.filter(str => count[str.length] === maxFreq);
    return result;
}
const a = ['a', 'ab', 'abc', 'cd', 'def', 'gh'];
console.log("result :", mostFrequentLength(a))

// Unit test
function unitTest() {
    const testCases = [
        {
            input: ['a', 'ab', 'abc', 'cd', 'def', 'gh'],
            expected: ['ab', 'cd', 'gh']
        },
        {
            input: ['aa', 'bbb', 'ccc', 'dd'],
            expected: ['aa', 'dd']
        },
        {
            input: ['x', 'y', 'z'],
            expected: ['x', 'y', 'z'] 
        },
        {
            input: [],
            expected: [] 
        }
    ];

    for (let i = 0; i < testCases.length; i++) {
        const { input, expected } = testCases[i];
        const result = mostFrequentLength(input);
        const passed = JSON.stringify(result) === JSON.stringify(expected);

        console.log(`Test case ${i + 1}: ${passed ? '✅ Passed' : '❌ Failed'}`);
        if (!passed) {
            console.log(` Expected: ${JSON.stringify(expected)}, but got: ${JSON.stringify(result)}`);
        }
    }
}

// Chạy unit test
unitTest();