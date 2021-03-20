function myFibo_func(order){
    
    let last0 = 0;
    let last1 = 1;
    let fibo;
    for (let i = 0; i< order; i++){
        fibo= last0+ last1;
        last0 = last1;
        last1 = fibo;
    }

    return fibo;
}
