/*
857. Minimum Cost to Hire K Workers
Solved
Hard
Topics
Companies
There are n workers. You are given two integer arrays quality and wage where quality[i] is the quality of the ith worker and wage[i] is the minimum wage expectation for the ith worker.

We want to hire exactly k workers to form a paid group. To hire a group of k workers, we must pay them according to the following rules:

Every worker in the paid group must be paid at least their minimum wage expectation.
In the group, each worker's pay must be directly proportional to their quality. This means if a worker’s quality is double that of another worker in the group, then they must be paid twice as much as the other worker.
Given the integer k, return the least amount of money needed to form a paid group satisfying the above conditions. Answers within 10-5 of the actual answer will be accepted.

 

Example 1:

Input: quality = [10,20,5], wage = [70,50,30], k = 2
Output: 105.00000
Explanation: We pay 70 to 0th worker and 35 to 2nd worker.
Example 2:

Input: quality = [3,1,10,10,1], wage = [4,8,2,2,7], k = 3
Output: 30.66667
Explanation: We pay 4 to 0th worker, 13.33333 to 2nd and 3rd workers separately.
 

Constraints:

n == quality.length == wage.length
1 <= k <= n <= 104
1 <= quality[i], wage[i] <= 104
*/

class HeapNode {
	val: number
	left: HeapNode | null
	right: HeapNode | null
	constructor(val?: number, left?: HeapNode | null, right?: HeapNode | null) {
		this.val = val ? val : 0
		this.left = left ? left : null
		this.right = right ? right : null
	}
}

class CustomPriorityQueue {
	private head: HeapNode | null
	private tail: HeapNode | null
	private mid: HeapNode | null
	private fixedLength: number
	private size: number
	private s: number

	constructor(len?: number) {
		this.head = null
		this.mid = null
		this.tail = null
		this.size = 0
		this.s = 0
		this.fixedLength = len ? len : Number.MAX_VALUE
	}

	private insert = (node: HeapNode, val: number) => {
		if (val < node.val) {
			if (val >= node.left!.val) {
				const x = new HeapNode(val)
				node.left!.right = x
				x.left = node.left
				node.left = x
				x.right = node
			} else {
				this.insert(node.left!, val)
			}
		} else {
			if (val <= node.right!.val) {
				const x = new HeapNode(val)
				node.right!.left = x
				x.right = node.right
				node.right = x
				x.left = node
			} else {
				this.insert(node.right!, val)
			}
		}
	}
	push = (val: number) => {
		if (this.mid === null) {
			this.mid = new HeapNode(val)
			this.head = this.mid
			this.tail = this.mid
		} else if (val <= this.head!.val) {
			const x = new HeapNode(val)
			x.right = this.head
			this.head!.left = x
			this.head = x
		} else if (val >= this.tail!.val) {
			const x = new HeapNode(val)
			this.tail!.right = x
			x.left = this.tail
			this.tail = x
		} else {
			this.insert(this.mid, val)
		}
		this.s += val
		this.size++
		if (this.size > this.fixedLength) {
			this.pop()
		}
	}
	toArray = (): number[] => {
		let p = new HeapNode()
		p.right = this.head
		const ans: number[] = []
		while (p.right !== null) {
			ans.push(p.right.val)
			p = p.right
		}
		return ans
	}
	pop = () => {
		if (this.size === 0) return
		if (this.size === 1) {
			this.head = null
			this.tail = null
			this.mid = null
			this.size = 0
			return
		}
		this.s -= this.tail!.val
		const x = this.tail!.left
		x!.right = null
		this.tail = x
		this.size--
	}
	length = (): number => {
		return this.size
	}
	top = (): number => {
		if (this.tail === null) throw new Error("Queue is empty!")
		return this.tail!.val
	}
	front = () => {
		if (this.head === null) throw new Error("Queue is empty!")
		return this.head!.val
	}
	sum = (): number => {
		return this.s
	}
}

function mincostToHireWorkers(quality: number[], wage: number[], k: number): number {
	const n = quality.length
	const pair: number[][] = []
	for (let i = 0; i < n; i++) pair.push([quality[i], wage[i]])
	const compare = (a: number[], b: number[]): number => {
		const x = a[0] * b[1] - a[1] * b[0]
		if (x < 0) return -1
		return 1
	}
	pair.sort(compare)
	console.log(pair)

	let ans = -1
	const orderedQuality = pair.map((f) => f[0])

	if (k > 1) {
		let qualitySum: number[] = []
		const q = new CustomPriorityQueue(k - 1)
		for (let i = n - 1; i >= 0; i--) {
			q.push(orderedQuality[i])
			console.log()
			qualitySum.push(q.sum())
		}
		qualitySum.reverse()

		console.log(orderedQuality)
		console.log(qualitySum)

		for (let i = 0; i <= n - k; i++) {
			const x = (orderedQuality[i] + qualitySum[i + 1]) * (pair[i][1] / pair[i][0])
			if (ans === -1 || ans > x) ans = x
		}
	} else {
		for (let i = 0; i <= n - k; i++) {
			const x = orderedQuality[i] * (pair[i][1] / pair[i][0])
			if (ans === -1 || ans > x) ans = x
		}
	}

	return ans
}

console.log(mincostToHireWorkers([2], [14], 1))
