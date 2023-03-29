function moveZeros(array) {
  if (array.length < 2 || !array.includes(0)) {
    return array;
  } else if (array.length == 2) {
    return [array[1], array[0]];
  } else {
    let countOfZeroes = 0;
    for(let i = array.length - 1; i >= 0; i--) {
      if (array[i] == 0) {
        countOfZeroes++;
        array.splice(i, 1);        
      }
    }
    for(let j = 0; j < countOfZeroes; j++) {
      array.push(0);
    }
    return array;   
  }    
}

module.exports = moveZeros;
