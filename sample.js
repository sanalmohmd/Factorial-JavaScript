const number =parseInt(prompt("enter a positive number :"));

if (number < 0){
    document.write("error")
}

else if (number === 0){
    document.write(`The factorial of ${number} is 1.`);

}

else{
    let fact = 1;
    for (i =1; i<= number ; i++){
        fact *=i;

    }

    document.write(`The factorial of ${number} is ${fact}.`);
}
