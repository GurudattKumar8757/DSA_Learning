//378. Kth Smallest Element in a Sorted Matrix
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    let pq = new MinPriorityQueue(x => x.val);

    //all the elements in first column into MinPQ
    for (let i = 0; i < matrix.length; i++) {
        pq.push({ val: matrix[i][0], row: i, col: 0 });
    }

    for (let i = 0; i < k - 1; i++) {
        let { val, row, col } = pq.pop();
        //add the  next element if present
        if (col + 1 < matrix.length) {
            pq.push({ val: matrix[row][col + 1], row: row, col: col + 1 })
        }
    }

    return pq.pop().val;
};