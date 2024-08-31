/*
1514. Path with Maximum Probability
Solved
Medium
Topics
Companies
Hint
You are given an undirected weighted graph of n nodes (0-indexed), represented by an edge list where edges[i] = [a, b] is an undirected edge connecting the nodes a and b with a probability of success of traversing that edge succProb[i].

Given two nodes start and end, find the path with the maximum probability of success to go from start to end and return its success probability.

If there is no path from start to end, return 0. Your answer will be accepted if it differs from the correct answer by at most 1e-5.

 

Example 1:



Input: n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.2], start = 0, end = 2
Output: 0.25000
Explanation: There are two paths from start to end, one having a probability of success = 0.2 and the other has 0.5 * 0.5 = 0.25.
Example 2:



Input: n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.3], start = 0, end = 2
Output: 0.30000
Example 3:



Input: n = 3, edges = [[0,1]], succProb = [0.5], start = 0, end = 2
Output: 0.00000
Explanation: There is no path between 0 and 2.
 

Constraints:

2 <= n <= 10^4
0 <= start, end < n
start != end
0 <= a, b < n
a != b
0 <= succProb.length == edges.length <= 2*10^4
0 <= succProb[i] <= 1
There is at most one edge between every two nodes.
*/

import { MapDoubleKeys } from "./__MapDoubleKeys";

function maxProbability(
	n: number,
	edges: number[][],
	succProb: number[],
	start_node: number,
	end_node: number
): number {
	const map = new MapDoubleKeys();
	const neighbors: number[][] = [];
	for (let i = 0; i < n; i++) {
		neighbors.push([]);
	}
	for (let i = 0; i < edges.length; i++) {
		neighbors[edges[i][0]].push(edges[i][1]);
		neighbors[edges[i][1]].push(edges[i][0]);
		map.set(edges[i][0], edges[i][1], succProb[i]);
	}

	let arr = [...neighbors[start_node]];
	while (arr.length > 0) {
		let newArr: number[] = [];
		for (let x of arr) {
			for (let i of neighbors[x]) {
				let d = map.get(start_node, x)! * map.get(x, i)!;
				if (!map.get(start_node, i) || map.get(start_node, i)! < d) {
					map.set(start_node, i, d);
					newArr.push(i);
				}
			}
		}
		arr = newArr;
	}

	return map.get(start_node, end_node) || 0;
}

console.log(
	maxProbability(
		3,
		[
			[0, 1],
			[1, 2],
			[0, 2],
		],
		[0.5, 0.5, 0.2],
		0,
		2
	)
);
