function run(x) {
    for (let i = 0; i < x; i++) { // O(n)
        for (let j = 0; j < x; j++) { // O(n)
            process.stdout.write('x ');
        }
        process.stdout.write('\n');
    }
}

function run2(x) {
    for (let j = 0; j < x; j++) { // O(n)
        process.stdout.write('x ');
    }
    process.stdout.write('\n\n');
    for (let i = 0; i < x; i++) { // O(n)
        for (let j = 0; j < x; j++) { // O(n)
            process.stdout.write('x ');
        }
        process.stdout.write('\n');
    }
}

console.time('time')
run(100);
console.timeEnd('time')