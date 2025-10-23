const primeFactors = num =>{
    let divisors = new Set();
    if(num % 2 === 0) {
        divisors.add(2);
        num/=2
    }
    console.log(num, '1st')
    for(let i=3; i*i <=num; i+=2){
        while(num % i== 0) {
            divisors.add(i);
            num /=i;
        } 
    }
    console.log(num, '2nd');
    if(num > 2) {
        divisors.add(num)
    }
    return Array.from(divisors)
}

console.log(primeFactors(14))