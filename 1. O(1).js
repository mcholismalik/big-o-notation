// sample 1
function run(x) {
    const res = x * 5; // O(1)
    console.log(res);
}

// sample 2
function run2(x) {
    const y = x * 5; // O(1)
    const z = x + 5; // O(1)
    const res = y + z; // O(1)
    console.log(res);
}

// sample 3
function run3(x) {
    let res = 0 // O(1)
    for (let i = 0; i < 5; i++) { // O(n)
        res = res + i + x;
    }
    console.log(res);
}

console.time('time')
run(1000000);
console.timeEnd('time')
