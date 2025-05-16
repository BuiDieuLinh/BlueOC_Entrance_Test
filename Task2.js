function sumTopTwo(arr) {
    if (!Array.isArray(arr) || arr.length < 2) return null;

    for (let i = 0; i < arr.length; i++) {
        if (!Number.isInteger(arr[i])) {
            return null;
        }
    }
    const sorted = arr.slice().sort((a, b) => b - a); 
    return sorted[0] + sorted[1]; 
}

function unitTest() {
    const tests = [
        { input: [1, 4, 2, 3, 5], expected: 9 },
        { input: [10, 9], expected: 19 },
        { input: [-1, -5, -3, -2], expected: -3 },
        { input: [5], expected: null },
        { input: [], expected: null },
        { input: [3, "4", 2], expected: 7 },       
        { input: [1.5, 2.3, 3.7], expected: null },    
    ];

    for (let i = 0; i < tests.length; i++) {
        const { input, expected } = tests[i];
        const result = sumTopTwo(input);
        const passed = result === expected;
        console.log(`Test ${i + 1}: ${passed ? '✅ Passed' : '❌ Failed'} | Output: ${result}, Expected: ${expected}`);
    }
}

unitTest();
