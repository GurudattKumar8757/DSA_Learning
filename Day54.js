class MaxPriorityQueue{
    constructor() {
        this.heap = [];
    }

    enqueue(value, priority) {
        this.heap.push({ value, priority });
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (this.heap[index].priority <= this.heap[parent].priority)
                break;

            this.swap(index, parent);
            index = parent;
        }
    }

    dequeue() {
        if (this.heap.length === 0) return null;
        const max = this.heap[0];
        const end = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.heapifyDown();
        }

        return max;
    }

    heapifyDown() {
        let index = 0;
        let length = this.heap.length;
        whiel(true){
            let left = (index * 2) + 1;
            let right = (index * 2) + 2;

            let largest = index;

            if (left < length && this.heap[largest].priority < this.heap[left].priority) {
                largest = left;
            }

            if (right < length && this.heap[largest].priority < this.heap[right].priority) {
                largest = right;
            }

            if (largest != index) {
                this.swap(index, largest);
                index = largest;
            }
        }
    }

    front() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}

//215. Kth Largest Element in an Array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let pq = new MinPriorityQueue();

    for (let i = 0; i < nums.length; i++) {
        pq.enqueue(nums[i]);

        if (pq.size() > k) {
            pq.dequeue();
        }
    }

    return pq.front();
};