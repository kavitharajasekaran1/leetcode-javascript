const fun = str =>{
    const strArray = str.split(' ');
  const myReduce = strArray.reduce((acc, item) => {
     if(acc.length < item.length) {
        return item;
     } else {
         return acc;
     }
  }, ''); 
  return myReduce;  
}
console.log(fun('Geeks for Geeks'));
