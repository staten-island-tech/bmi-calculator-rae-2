/* function test(message){
    console.log(message);
}
//string "" setntences, word etc.
test("RAHHHH");
//numbers/integers
test(45);
//booleans true or false
test(true); */
//decare variables, define variables

const h = Number(prompt("enter your height in inches"));
const w = Number(prompt("enter your weight in pounds"));

function getBMI(h,w){
    return((w*703)/(h**2))

}

const b = ((w*703)/(h**2))

function userhw(){
    const bmi = getBMI(h,w);
    if (bmi < 19){
        console.log("under");

    }
    else if (bmi > 25){
        console.log("over");

    }
    else{
        console.log("wow healthy so cool wow")
    }
}
userhw()
