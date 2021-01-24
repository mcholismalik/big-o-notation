// quiz 1
/**
 * n = 3
 * 0 -> 0 + 0 = 0
 * 1 -> 0 + 1 = 1
 * 2 -> 1 + 2 = 3
 * 3 -> 3 + 3 = 6
 */
function run(n) {
    let res = 0;
    for (let i = 1; i <= n; i++) {
        res = res + i;
        console.log(res)
    }
}

function run2(n) {
    const res = n * (n + 1) / 2; // O(1)
    console.log(res)
}
