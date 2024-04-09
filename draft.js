const Queue = require("./__queue.js");

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  const std = new Queue();
  const snw = new Queue();
  let count0 = 0;
  let count1 = 0;
  for (let i in students) {
    if (students[i] === 0) count0++;
    else count1++;
    std.push(students[i]);
    snw.push(sandwiches[i]);
  }
  while (std.length > 0) {
    if (std.front() === snw.front()) {
      if (std.front() === 0) count0--;
      else count1--;
      std.pop();
      snw.pop();
    } else {
      if (snw.front() === 1 && count1 === 0) {
        return std.length;
      }
      if (snw.front() === 0 && count0 === 0) {
        return std.length;
      }
      const x = std.front();
      std.pop();
      std.push(x);
    }
  }
  return 0;
};

const students = [1, 1, 1, 0, 0, 1],
  sandwiches = [1, 0, 0, 0, 1, 1];
console.log(countStudents(students, sandwiches));
