describe('HomeWork tasks', () => {

    describe('init', () => {
        //Given
        const testData = [
            {
                numbers: [],
                expected: [],
            },
            {
                numbers: [1],
                expected: [1],
            },
            {
                numbers: [1, 2, 3],
                expected: [1, 2, 3],
            }
        ];

        testData.forEach(data => {
            const {numbers, expected} = data;

            //When
            const actual = new AList().init(numbers);

            //Then
            it(`should return ${expected} when numbers = ${numbers}`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('getSize', () => {
        //Given
        const testData = [
            {
                numbers: [],
                expected: 0,
            },
            {
                numbers: [2],
                expected: 0,
            },
            {
                numbers: [1, 2],
                expected: 0,
            },
            {
                numbers: [1, 2, 9, 12],
                expected: 0,
            }
        ];

        testData.forEach(data => {
            const {numbers, expected} = data;

            //When
            const actual = new AList().getSize(numbers);

            //Then
            it(`should return ${expected} when numbers = ${numbers}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('toString', () => {
        //Given
        const testData = [
            {
                numbers: [],
                expected: "[]",
            },
            {
                numbers: [1],
                expected: "[]",
            },
            {
                numbers: [1, 2, 3],
                expected: "[]",
            }
        ];

        testData.forEach(data => {
            const {numbers, expected} = data;

            //When
            const actual = new AList().toString(numbers);

            //Then
            it(`should return ${expected} when numbers = ${numbers}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });



});