let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
const test = [2, 1, 4, 3];
bubbleSort(test);
console.log(test);

// //while loop with break
// function bubbleSort(arr) {
//   let swap = false;
//   while (true) {
//     swap = false;
//     for (let i = 0; i < arr.length - 1; i ++) {
//       if (arr[i] > arr[i + 1]) {
//         swap = true;
//         let temp = arr[i + 1];
//         arr[i + 1] = arr[i], arr[i] = temp;
//       }
//     }
//     if (swap === false) break;
//   }
// }

//do while
function bubbleSort(arr) {
  let swap = false;
  do {
    swap = false;
    for (let i = 0; i < arr.length - 1; i ++) {
      if (arr[i] > arr[i + 1]) {
        swap = true;
        let temp = arr[i + 1];
        arr[i + 1] = arr[i], arr[i] = temp;
      }
    }
  } while (swap) 
}