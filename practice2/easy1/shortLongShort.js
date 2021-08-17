
console.log(shortLongShort('hello','world'));
console.log(shortLongShort('abcde', 'fgh'));
console.log(shortLongShort('12', '345'));
console.log(shortLongShort('', 'xyz'));

function shortLongShort(string1, string2) {
  const strings = [string1, string2];
  strings.sort((a, b) => {return b.length - a.length});
  return strings[1] + strings[0] + strings[1];
}