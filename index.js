let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
let n = 4;
function printDownToUpMatrix(row, col) {
  while (row >= 0 && col < n) {
    console.log(matrix[row][col]);
    row--, col++;
  }
}

function print() {
  for (let i = 0; i < n; i++) {
    printDownToUpMatrix(i, 0);
  }
  for (let i = 1; i < n; i++) {
    printDownToUpMatrix(n - 1, i);
  }
}

print();
