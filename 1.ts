function func(str: string[]): string{
  if (str.length == 0) return "";
  
  return `${str.length}`;
}

const str: string[] = ["one", "two", "three"];
console.log(func(str));