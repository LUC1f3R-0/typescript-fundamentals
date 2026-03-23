const fun = (prex: string, arr: Array<string>): Array<string> => {
  const newArr = arr.filter(n => prex == n);
  return newArr;
}

console.log(fun("fun", ["fun", "gheuit", "grbuei"]));