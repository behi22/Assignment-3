//Part a 
let hour=prompt("How many hours have you worked?");
if(hour<=40){
    let total=hour*12;
    console.log("In "+hour+" hours you made $"+total);
}else{
    let log=hour;
    hour-=40;
    let total=480+(hour*18);
    console.log("In "+log+" hours you made $"+total);
} 

//Part b
let num1=prompt("Enter first number");
let num2=prompt("Enter second number");
if(num1==0||num2==0){
    console.log("You entered zero");
}else if(num1%num2===0 && num2%num1===0){
    console.log("First divides second & Second divides first");
}else if(num1%num2===0){
    console.log("Second divides first");
}else if(num2%num1===0){
    console.log("First divides second");
}else{console.log("Not divisible");}

//Part c
let year=prompt("Enter year");
if(year<1582){
    alert("Error,Year Not Valid.");
}else if(year%4===0){
    if(year%100!==0)
        alert("It IS a leap year");
    else if(year%400===0)
    alert("It IS a leap year");
    else alert("It IS NOT a leap year");
}else alert("It IS NOT a leap year");