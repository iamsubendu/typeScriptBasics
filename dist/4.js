"use strict";
let numb = [20, 79, 85, 64, 31];
function sortAsc(data) {
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (data[j] > data[j + 1]) {
                let n1 = data[j];
                data[j] = data[j + 1];
                data[j + 1] = n1;
            }
        }
    }
}
function sortDesc(data) {
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (data[j] < data[j + 1]) {
                let n1 = data[j];
                data[j] = data[j + 1];
                data[j + 1] = n1;
            }
        }
    }
}
function prints(list) {
    let line = '';
    for (let item of list) {
        line += ' ' + item;
    }
    console.log(line);
}
console.log('Before sort');
prints(numb);
sortAsc(numb);
console.log('After asc sort');
prints(numb);
sortDesc(numb);
console.log('After desc sort');
prints(numb);
//# sourceMappingURL=4.js.map