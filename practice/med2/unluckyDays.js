console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2

function fridayThe13ths(year) {
  const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  let unluckyFridays = 0;

  months.forEach(month => {
    const day = new Date(year, month, 13);
    if (day.getDay() === 5) {
      unluckyFridays++;
    }
  });
  return unluckyFridays;
}