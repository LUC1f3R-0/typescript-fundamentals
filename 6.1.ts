// const fun = (str: Array<string>): Array<string> => {
//   let prefix = str[0];
//   let arr: Array<string> = [];
  
//   for (let i = 1; i < str.length; i++){
//     if (!str[i]?.startsWith(prefix)) {
//       arr.push(str[i])
//     }
//   }
//   console.log(arr)
  
//   return [];
// }

// const strs: Array<string> = ["flower", "flow", "flight"];

// console.log(fun(strs));
// 
// 


const fun = (str: Array<string>) => {
  let newArr: Array<string> = [];
  
  for (let i = 0; i < str.length; i++) {
    const newWord = str[i];
    const word = newWord[0].toUpperCase() + newWord.slice(1);
    newArr.push(word);
  }
  return newArr;
}

const strs: Array<string> = ["ygj", "UGYV", "huierfb", "fwgy", "ugby"];

console.log(fun(strs));