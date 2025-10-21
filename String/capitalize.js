const fun = str =>{
    let res = ''
   const result = str.split('').map(item => item == '_' ? " " : item.toUpperCase());
   console.log(result.join(''));


}

console.log(fun('hello_world'))