
class minHeap {
    constructor() {
        this.heap = [];
    }

    getLeftChildIndex(i) {
        return (2 * i) + 1;
    }

    getRightChildIndex(i) {
        return (2 * i) + 2;
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2)
    }

    insert(val) {
        this.heap.push(val);
        let lastIndex = this.heap.length - 1;
        this.heapifyUp(lastIndex);
    }

    heapifyUp(i) {
        while (i > 0) {
            let parentIndex = this.getParentIndex(i);
            if (this.heap[i] < this.heap[parentIndex]) {
                // let temp = this.heap[parentIndex];
                // this.heap[parentIndex] = this.heap[i];
                // this.heap[i] = temp;

                [this.heap[i], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[i]];
                i = parentIndex;
            } else {
                break;
            }
        }
    }

    extract() {
        if (this.heap.length < 1) return null;
        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min;
    }

    heapifyDown(i) {
        let leftChild = this.getLeftChildIndex(i);
        let rightChild = this.getRightChildIndex(i);
        let n = this.heap.length;

        let smallest = i;

        if (leftChild < n && this.heap[smallest] > this.heap[leftChild]) {
            smallest = leftChild;
        }
        if (rightChild < n && this.heap[smallest] > this.heap[rightChild]) {
            smallest = rightChild;
        }

        if (smallest != i) {
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            this.heapifyDown(smallest);
        }
    }
}

let heap = new minHeap();

heap.insert(5);
heap.insert(10);
heap.insert(20);
heap.insert(30);
heap.insert(1);
heap.insert(0);

console.log(heap);

console.log(heap.extract());
console.log(heap.extract());  
