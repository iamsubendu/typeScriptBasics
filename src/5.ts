// Standard deviation

let maximum = (data: number[]): number => {
  let max: number = data[0];
  let index = 1;
  while (index < data.length) {
    if (data[index] > max) max = data[index];
    index++;
  }
  return max;
};

let minimum = (data: number[]): number => {
  let min: number = data[0];
  let index = 1;
  while (index < data.length) {
    if (data[index] < min) min = data[index];
    index++;
  }
  return min;
};

let average = (data: number[]): number => {
  let sum = 0;
  for (let item of data) sum += item;
  return sum / data.length;
};

let sigma = (data: number[]): number[] => {
  let d: number[] = [];
  let avg: number = average(data);
  for (let index in data) {
    d[index] = avg - data[index];
  }
  return d;
};

let analyze = (data: number[]): [number, number, number, number[]] => {
  let max: number = maximum(data);
  let min: number = minimum(data);
  let avg: number = average(data);
  let d1: number[] = sigma(data);
  return [max, min, avg, d1];
};

let [max, min, avg, sd] = analyze([2, 4, 6, 8, 10]);
console.log(max, ',', min, ',', avg, ',', sd);
