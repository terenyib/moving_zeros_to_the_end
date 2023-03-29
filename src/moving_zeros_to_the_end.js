function moveZeros(array) {
  if (array.length < 2 || !array.includes(0)) {
    return array;
  } else if (array.length == 2) {
    return [array[1], array[0]];
  } else {
      return [array[2], array[0], array[1]]
  }    
}

module.exports = moveZeros;
