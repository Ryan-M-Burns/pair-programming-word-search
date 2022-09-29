const wordSearch = (letters, word) => {
  if (!word) {
    console.log("You have to search for something!");
    return false;
  }
  const wordArr = word.split('');
  const height = letters.length;
  const width = letters[0].length;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (wordArr[0] === letters[i][j] && (width - j >= word.length)) {
        for (let k = 0; k < word.length; k++) {
          testWord += letters[i][k];
        }
        if (testWord.includes(word)) return true;
        testWord = '';
      }
      
      if (wordArr[0] === letters[j][i] && (height - j >= word.length)) {
        for (let l = j; l < word.length + j; l++) {
          testWord += letters[l][i];
        }
        if (testWord.includes(word)) return true;
        testWord = '';
      }
    }
  }

  return false;
};

module.exports = wordSearch;
