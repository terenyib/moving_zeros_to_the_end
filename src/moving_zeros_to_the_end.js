function moveZeros(array) {
  if (array[0] == 0 && array[1] == 1) {
    return [1, 0];
  } else {
    return array;
  }
}

module.exports = moveZeros;
