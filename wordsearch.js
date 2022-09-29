const transpose = function(matrix) {
  let matrixTrans;

  matrixTrans = matrix[0].map((_, colIndex) =>
    matrix.map(row => row[colIndex]));

  return matrixTrans;
};

const searchJoinedArray = function(array, word) {
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