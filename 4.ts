// 2. Filter Words by Prefix

// Given a list of words, return only the ones that start with a given prefix.
// 
const fun = (pre: string, str: Array<string>):Array<string> | string => { 
  if (!str.length) return "nothing";
  
  let prefixs: Array<string> | null = [];
  
  for (let i = 0; i <= str.length-1; i++){
    if ((pre.startsWith(str[i]) && (str[i]))) {
      prefixs.push(str[i]);
    }
  }
  return prefixs;
}

console.log(fun("testing", ["tes", "gebruh", "rghuie", "", "test", "gehruiy", "testi", ""]))