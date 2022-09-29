const transpose = function(matrix) {
  let line = [];
  let matrixArr = [];
  console.log('matrix:', matrix);
  for (let i = 0; i < matrix[0].length; i++) {

    for (let j = 0; j < matrix.length; j++) {
      line.push(matrix[j][i]);
    }

    matrixArr.push(line);
    line = [];

  }
  console.log('matrixArr:', matrixArr);
  return matrixArr;
};

const searchJoinedArray = (array, word) => {
  let joined = array.map(ls => ls.join(''));
  
  for (const l of joined) {
    if (l.includes(word)) return true;
  }
  
  return false;
};

const wordSearch = (letters, word) => {
  if (!word) {
    return false;
  }

  return searchJoinedArray(letters, word) || searchJoinedArray(transpose(letters), word);
};

module.exports = wordSearch;