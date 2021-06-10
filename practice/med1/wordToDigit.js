const WORD_TO_DIGIT = {
  zero:0,
  one:1,
  two:2,
  three:3,
  four:4,
  five:5,
  six:6,
  seven:7,
  eight:8,
  nine:9
}
const WORD_KEYS = Object.keys(WORD_TO_DIGIT);

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

// function wordToDigit(string) {
//   let finalString = '';
//   string.split(' ').forEach(word => {
//     if(WORD_KEYS.includes(word)) {
//       finalString += WORD_TO_DIGIT[word];
//     } else {
//       finalString += word;
//     }
//   });
//   return finalString;
// }

// function wordToDigit(string) {
//   let finalString = '';
//   WORD_KEYS.forEach(word => {
//     finalString = string.replaceAll(word, WORD_TO_DIGIT[word]);
//   });
//   return finalString;
// }

function wordToDigit(string) {
  WORD_KEYS.forEach(word => {
    let regex = new RegExp(word, 'g');
    string = string.replace(regex, WORD_TO_DIGIT[word]);
  });
  return string;
}