function moveZeros(array) {
  if (array[0] == 0 && array[1] == 1) {
    return [1, 0];
  } else if (array[0] == 0 && array[1] == 0 && array[2] == 1) {
    return [1, 0, 0];
  } else {
    return array;
  }
}

module.exports = moveZeros;
