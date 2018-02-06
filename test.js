import test from 'ava';
import linearRegression from '.';

test('should pass', t => {
    const given = [
        [43, 99],
        [21, 65],
        [25, 79],
        [42, 75],
        [57, 87],
        [59, 81]
        // [1, 2],
        // [2, 3],
        // [3, 4],
        // [4, 5],
        // [5, 6],
        // [6, 7]
    ];

    const expected = linearRegression(given);
    
    t.deepEqual(expected, {
        a: 65.1415715245131,
        b: 0.38522498321020804
        // a: 1,
        // b: 1
    });
});