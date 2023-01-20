class MinimumHeap {
    constructor(arr = [], _maxSize = -1) {
        if (arr instanceof Array) {
            this.data = [null];
            arr.forEach(item => {
                this.insert(item);
            });
        }
    }

    size() {
        return this.data.length - 1;
    }

    insert(val) {
        // full checker
        if (this._maxSize !== -1
            && this.data.length > this._maxSize) {
            throw new Error('full');
        }

        // add to tail
        this.data.push(val);

        // swap
        let curIndex = this.data.length - 1;
        while (curIndex > 1) {
            const parent = curIndex >> 2;
            if (this.data[curIndex] >= this.data[parent]) {
                break;
            }
            const temp = this.data[curIndex];
            this.data[curIndex] = this.data[parent];
            this.data[parent] = temp;
            curIndex = parent;
        }

        return true;
    }

    peek() {
        return this.data[1];
    }

    pop() {
        if (this.data.length <= 1) {
            throw new Error('empty');
        }
        const rst = this.data[1];
        this.data[1] = this.data.pop();

        let curIndex = 1;
        let [leftIndex, rightIndex] = [curIndex * 2, curIndex * 2 + 1];
        while (leftIndex <= this.data.length
            && (this.data[leftIndex] < this.data[curIndex]
                || this.data[rightIndex] < this.data[curIndex])) {
            const tobeSwap = this.data[rightIndex] < this.data[leftIndex] ? rightIndex : leftIndex;
            const temp = this.data[tobeSwap];
            this.data[tobeSwap] = this.data[curIndex];
            this.data[curIndex] = temp;
            curIndex = tobeSwap;
            [leftIndex, rightIndex] = [curIndex * 2, curIndex * 2 + 1];
        }

        return rst;
    }

    values() {
        return this.data.slice(1);
    }
}

module.exports = MinimumHeap;