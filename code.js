// Inspiration taken from the, 'divide-and-conquer-sum-melgrif10' repository

function divideAndConquerSum(arr) {
  if(arr.length == 0) {
      return 0;
  }
  else if(arr.length == 1) {
      return arr[0];
  }
  else {
  const arrayLength = arr.length;
  const oneThirdArrayLength = Math.floor(arrayLength / 3);
  const twoThirdsArrayLength = Math.floor((2 * arrayLength) / 3);

  let leftSubArray = arr.slice(0, oneThirdArrayLength);
  let middleSubArray = arr.slice(oneThirdArrayLength, twoThirdsArrayLength);
  let rightSubArray = arr.slice(twoThirdsArrayLength, arrayLength);

  let leftSum = divideAndConquerSum(leftSubArray);
  let middleSum = divideAndConquerSum(middleSubArray);
  let rightSum = divideAndConquerSum(rightSubArray);

  return (leftSum + middleSum + rightSum);
  }
}
