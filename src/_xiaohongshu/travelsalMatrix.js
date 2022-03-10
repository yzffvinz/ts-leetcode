function travelsalMatrix(matrix) {
}

const rst = travelsalMatrix([
    [1, 2, 3, 11],
    [4, 5, 6, 12],
    [7, 8, 9, 13],
]).join(',');
console.log(rst, rst === '1,2,3,6,9,8,7,4,5');