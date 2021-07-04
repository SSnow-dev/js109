const LOWERCASE = /[a-z]/;
const UPPERCASE = /[A-Z]/;

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

function letterPercentages(string) {
  const percentages = {}

  let lCase = 0;
  let uCase = 0;
  let neither = 0;

  for (let char of string) {
    if (LOWERCASE.test(char)) {
      lCase ++;
    } else if (UPPERCASE.test(char)) {
      uCase ++;
    } else neither ++;
  }

  percentages.lowercase = ((lCase / string.length) * 100).toFixed(2);
  percentages.uppercase = ((uCase / string.length) * 100).toFixed(2);
  percentages.neither = ((neither / string.length) * 100).toFixed(2);

  return percentages;
}

