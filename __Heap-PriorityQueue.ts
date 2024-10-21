class MaxHeap {
	private heap: number[]
	constructor() {
		this.heap = []
	}
	private heapUp = (idx: number) => {
		if (idx === 0) return
		let parent_idx = Math.floor((idx - 1) / 2)
		if (this.heap[parent_idx] < this.heap[idx]) {
			;[this.heap[parent_idx], this.heap[idx]] = [this.heap[idx], this.heap[parent_idx]]
			this.heapUp(parent_idx)
		}
	}
	private heapDown = (idx: number) => {
		let smallest_child_idx = 2 * idx + 1
		if (smallest_child_idx >= this.heap.length) return
		if (
			2 * idx + 2 < this.heap.length &&
			this.heap[smallest_child_idx] < this.heap[2 * idx + 2]
		) {
			smallest_child_idx = 2 * idx + 2
		}
		if (this.heap[idx] < this.heap[smallest_child_idx]) {
			;[this.heap[idx], this.heap[smallest_child_idx]] = [
				this.heap[smallest_child_idx],
				this.heap[idx],
			]
			this.heapDown(smallest_child_idx)
		}
	}
	top = () => {
		if (this.heap.length === 0) {
			return Error("Heap is empty!")
		}
		return this.heap[0]
	}
	push = (num: number) => {
		this.heap.push(num)
		this.heapUp(this.heap.length - 1)
	}
	pop = () => {
		if (this.heap.length === 0) {
			return Error("Heap is empty!")
		}
		const res = this.heap[0]
		;[this.heap[0], this.heap[this.heap.length - 1]] = [
			this.heap[this.heap.length - 1],
			this.heap[0],
		]
		this.heap.pop()
		this.heapDown(0)
		return res
	}
	length = () => {
		return this.heap.length
	}
	updateByIndex = (idx: number, val: number) => {
		if (val > this.heap[idx]) {
			this.heap[idx] = val
			this.heapUp(idx)
		} else if (val < this.heap[idx]) {
			this.heap[idx] = val
			this.heapDown(idx)
		}
	}
	updateValue = (old_val: number, new_val: number) => {
		for (let i = 0; i < this.heap.length; i++) {
			if (this.heap[i] === old_val) {
				this.updateByIndex(i, new_val)
				return
			}
		}
	}
}

class MinHeap {
	private heap: number[]
	constructor() {
		this.heap = []
	}
	private heapUp = (idx: number) => {
		if (idx === 0) return
		let parent_idx = Math.floor((idx - 1) / 2)
		if (this.heap[parent_idx] > this.heap[idx]) {
			;[this.heap[parent_idx], this.heap[idx]] = [this.heap[idx], this.heap[parent_idx]]
			this.heapUp(parent_idx)
		}
	}
	private heapDown = (idx: number) => {
		let smallest_child_idx = 2 * idx + 1
		if (smallest_child_idx >= this.heap.length) return
		if (
			2 * idx + 2 < this.heap.length &&
			this.heap[smallest_child_idx] > this.heap[2 * idx + 2]
		) {
			smallest_child_idx = 2 * idx + 2
		}
		if (this.heap[idx] > this.heap[smallest_child_idx]) {
			;[this.heap[idx], this.heap[smallest_child_idx]] = [
				this.heap[smallest_child_idx],
				this.heap[idx],
			]
			this.heapDown(smallest_child_idx)
		}
	}
	top = () => {
		if (this.heap.length === 0) {
			return Error("Heap is empty!")
		}
		return this.heap[0]
	}
	push = (num: number) => {
		this.heap.push(num)
		this.heapUp(this.heap.length - 1)
	}
	pop = () => {
		if (this.heap.length === 0) {
			return Error("Heap is empty!")
		}
		const res = this.heap[0]
		;[this.heap[0], this.heap[this.heap.length - 1]] = [
			this.heap[this.heap.length - 1],
			this.heap[0],
		]
		this.heap.pop()
		this.heapDown(0)
		return res
	}
	length = () => {
		return this.heap.length
	}
	updateByIndex = (idx: number, val: number) => {
		if (val < this.heap[idx]) {
			this.heap[idx] = val
			this.heapUp(idx)
		} else if (val > this.heap[idx]) {
			this.heap[idx] = val
			this.heapDown(idx)
		}
	}
	updateValue = (old_val: number, new_val: number) => {
		for (let i = 0; i < this.heap.length; i++) {
			if (this.heap[i] === old_val) {
				this.updateByIndex(i, new_val)
				return
			}
		}
	}
}

export { MaxHeap, MinHeap }
