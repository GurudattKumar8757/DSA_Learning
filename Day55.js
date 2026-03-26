//1046. Last Stone Weight
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    let heap = new MaxPriorityQueue();

    for (let i = 0; i < stones.length; i++) {
        heap.enqueue(stones[i]);
    }

    while (heap.size() > 1) {
        let first = heap.dequeue();
        let second = heap.dequeue();

        if (first != second) {
            heap.enqueue(first - second);
        }
    }

    return heap.front() ? heap.front() : 0;
};

//703. Kth Largest Element in a Stream
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.heap = new MinPriorityQueue();
    this.k = k;
    for (let i = 0; i < nums.length; i++) {
        this.add(nums[i]);
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.heap.enqueue(val);

    if (this.heap.size() > this.k) {
        this.heap.dequeue();
    }

    return this.heap.front();
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

//347. Top K Frequent Elements
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let freqMap = {};
    for (let i = 0; i < nums.length; i++) {
        if (!freqMap[nums[i]]) {
            freqMap[nums[i]] = 1;
        } else {
            ++freqMap[nums[i]];
        }
    }

    let pq = new MinPriorityQueue(x => x.freq);

    for (key in freqMap) {
        pq.push({ val: key, freq: freqMap[key] })

        if (pq.size() > k) {
            pq.pop();
        }
    }

    return pq.toArray().map(x => Number(x.val));
};