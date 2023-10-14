"use strict";
let maximum = (data) => {
    let max = data[0];
    let index = 1;
    while (index < data.length) {
        if (data[index] > max)
            max = data[index];
        index++;
    }
    return max;
};
let minimum = (data) => {
    let min = data[0];
    let index = 1;
    while (index < data.length) {
        if (data[index] < min)
            min = data[index];
        index++;
    }
    return min;
};
let average = (data) => {
    let sum = 0;
    for (let item of data)
        sum += item;
    return sum / data.length;
};
let sigma = (data) => {
    let d = [];
    let avg = average(data);
    for (let index in data) {
        d[index] = avg - data[index];
    }
    return d;
};
let analyze = (data) => {
    let max = maximum(data);
    let min = minimum(data);
    let avg = average(data);
    let d1 = sigma(data);
    return [max, min, avg, d1];
};
let [max, min, avg, sd] = analyze([2, 4, 6, 8, 10]);
console.log(max, ',', min, ',', avg, ',', sd);
//# sourceMappingURL=5.js.map