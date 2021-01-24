// sample 1
function run(x) {
    let res = 0; // O(1)
    for (let i = 0; i < x; i++) { // O(n)
        res = res + 1;
    }
    console.log(res);
}

// sample 2
function run2(x) {
    let res = 0; // O(1)
    for (let i = 0; i < x; i++) { // O(n)
        res = res + 1;
    }
    for (let i = 0; i < x; i++) { // O(n)
        res = res + 1;
    }
    res = res * 5; // O(1)
    console.log(res);
}

// 0 2 4 6 8 10
function run3(x) {
    let res = 0; // O(1)
    for (let i = 0; i < x; i++) { // O(n)
        console.log(res);
        res = res + 2;
    }
}

console.time('a')
run(1000);
console.timeEnd('a')
