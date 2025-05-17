let setA = new Set([1, 2, 3, 4]);
let setB = new Set([3, 4, 5, 6]);

function intersection(setA, setB) {
  let intersectionSet = new Set();
  for (let ele of setA) {
    if (setB.has(ele)) {
      intersectionSet.add(ele);
    }
  }
  return intersectionSet;
}

function isSuperSet(setA, subset) {
  for (let ele of subset) {
    if (!setA.has(ele)) {
      return false;
    }
  }
  return true;
}

function union(setA, setB) {
  let unionSet = new Set(setA);
  for (let ele of setB) {
    unionSet.add(ele);
  }
  return unionSet;
}

function difference(setA, setB) {
  let differenceSet = new Set(setA);
  for (let ele of setB) {
    differenceSet.delete(ele);
  }
  return differenceSet;
}

function uniqueList(arr1, arr2) {
  let unique = new Set(arr1.concat(arr2));
  return Array.from(unique);
}

let setC = uniqueList([1, 1, 2, 2], [2, 3, 4, 5]);

console.log(setC);
