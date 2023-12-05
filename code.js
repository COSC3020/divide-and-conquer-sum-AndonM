function divideAndConquerSort(arr) {
    if (arr.length < 1) {
      return 0;
    } else {
      let oneThird = Math.floor(arr.length / 3);
      let twoThirds = Math.floor((2 * arr.length) / 3);
  
      const left = divideAndConquerSort(arr.slice(0, oneThird));
      const middle = divideAndConquerSort(arr.slice(oneThird, twoThirds));
      const right = divideAndConquerSort(arr.slice(twoThirds, arr.length));
  
      return mergeThree(left, middle, right);
    }
  }
  
  function mergeThree(left, middle, right) {
    let sortedArr = [];
    while (left.length && middle.length && right.length) {
      if (left[0] <= middle[0] && left[0] <= right[0]) {
        sortedArr.push(left.shift());
      } else if (middle[0] <= left[0] && middle[0] <= right[0]) {
        sortedArr.push(middle.shift());
      } else {
        sortedArr.push(right.shift());
      }
    }
    return [...sortedArr, ...left, ...middle, ...right];
  }
