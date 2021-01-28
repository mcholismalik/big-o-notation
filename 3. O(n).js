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

// sample 3
function run3(x) {
    let res = 0; // O(1)
    for (let i = 0; i < x; i++) { // O(n)
        console.log(res);
        res = res + 2;
    }
}


// linear search
function linearSearch(arr, v) {
    for (let i = 0; i < arr.length; i++) {
        if (v === arr[i]) return true;
    }
    return false;
}

console.time('a')
run(1000);
console.timeEnd('a')
