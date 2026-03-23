// 1. Basic Prefix Check

// Given a word and a prefix, determine whether the word starts with that prefix.

const fun = (str1: string, str2: string): boolean => {
  return str1.startsWith(str2);
}

console.log(fun("fun", "fun"));