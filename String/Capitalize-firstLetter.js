const fun = str =>{
    let strArray = str.split(' ');
    let myReduce = strArray.reduce((acc, item) => {

        let result = item[0].toUpperCase() + item.slice(1);
        acc = acc.concat(result);
        acc = acc.concat(' ')
        return acc;
    

    },'');

    return myReduce;

}

console.log(fun('geeks for geeks jolly'));