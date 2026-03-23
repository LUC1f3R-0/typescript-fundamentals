const function1 = (str: Array<string>):number => {
  
  const firstletter = str[0];
  let num: number = 0; 
  
  if (str.length != 0) {
    
    for (let i = 1; i < str.length; i++){
      if (firstletter == str[i])
        num++;
    }
  }
  return num;
};

const stringOne: Array<string> = ["egrbihj", "egrbihj", "wecrfhinuql", "egrbihj"];

console.log(function1(stringOne));