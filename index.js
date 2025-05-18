let arr = [4, -1, 5, 2, -3, 0];
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      let temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    }
  }
}

function insertionSort(arr) {
  let value, i, j;
  for (i = 0; i < arr.length; i++) {
    value = arr[i];
    for (j = i - 1; j > -1 && arr[j] > value; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = value;
  }
}

insertionSort(arr);
console.log(arr);
