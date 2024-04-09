/*
621. Task Scheduler
Solved
Medium
Topics
Companies
You are given an array of CPU tasks, each represented by letters A to Z, and a cooling time, n. Each cycle or interval allows the completion of one task. Tasks can be completed in any order, but there's a constraint: identical tasks must be separated by at least n intervals due to cooling time.

​Return the minimum number of intervals required to complete all tasks.

 

Example 1:

Input: tasks = ["A","A","A","B","B","B"], n = 2

Output: 8

Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.

After completing task A, you must wait two cycles before doing A again. The same applies to task B. In the 3rd interval, neither A nor B can be done, so you idle. By the 4th cycle, you can do A again as 2 intervals have passed.

Example 2:

Input: tasks = ["A","C","A","B","D","B"], n = 1

Output: 6

Explanation: A possible sequence is: A -> B -> C -> D -> A -> B.

With a cooling interval of 1, you can repeat a task after just one other task.

Example 3:

Input: tasks = ["A","A","A", "B","B","B"], n = 3

Output: 10

Explanation: A possible sequence is: A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B.

There are only two types of tasks, A and B, which need to be separated by 3 intervals. This leads to idling twice between repetitions of these tasks.

 

Constraints:

1 <= tasks.length <= 104
tasks[i] is an uppercase English letter.
0 <= n <= 100
*/

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    const freq = {};
    const taskName = [];
    for (let x of tasks) {
        if (!freq[x]) {
            freq[x] = 0;
            taskName.push(x);
        }
        freq[x]++;
    }
    console.log("freq", freq);
    taskName.sort((a, b) => freq[b] - freq[a]);
    let countInterval = 0;
    let count = 0;
    const workOrder = [];
    while (count < tasks.length) {
        let m = 0;
        taskName.sort((a, b) => freq[b] - freq[a]);
        for (let x of taskName) {
            if (m === n + 1) {
                break;
            }
            else if (freq[x] === 0 ){
                continue
            } 
            else {
                workOrder.push(x);
                freq[x]--;
                countInterval++;
                m++;
            }
            count++;
        }
        if (count === tasks.length) {
            console.log("workOrder", workOrder);
            return countInterval;
        }
        while (m < n + 1) {
            countInterval++;
            workOrder.push("idle");
            m++;
        }
    }
    console.log("workOrder", workOrder);
    return countInterval;
};

const tasks = ["A","A","A","B","B","B", "C","C","C", "D", "D", "E"],
    n = 2;
console.log(leastInterval(tasks, n));
