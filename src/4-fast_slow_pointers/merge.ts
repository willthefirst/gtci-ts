class Interval {
  start: number;
  end: number;
  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }

  get_interval() {
    return '[' + this.start + ', ' + this.end + ']';
  }
}

const merge = function (intervals: Interval[]): Interval[] {
  const merged: Interval[] = [];
  // TODO: Write your code here
  return merged;
};

let merged_intervals, result;

merged_intervals = merge([
  new Interval(1, 4),
  new Interval(2, 5),
  new Interval(7, 9)
]);
result = '';
for (let i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + ' ';
}
console.log(`Merged intervals: ${result}`);

merged_intervals = merge([
  new Interval(6, 7),
  new Interval(2, 4),
  new Interval(5, 9)
]);
result = '';
for (let i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + ' ';
}
console.log(`Merged intervals: ${result}`);

merged_intervals = merge([
  new Interval(1, 4),
  new Interval(2, 6),
  new Interval(3, 5)
]);
result = '';
for (let i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + ' ';
}
console.log(`Merged intervals: ${result}`);
