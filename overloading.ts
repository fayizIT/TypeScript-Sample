//function overloading Topic




// we can use this case for union operator  Case-1

function add(num1:number | string,num2:number | string): number | string{
    if(typeof num1 === "string" || typeof num2 === "string"){
    return num1 + "" + num2;
}
return num1 + num2;
}
add(3,4);
add("3","4");

// we can use this case use "any" type   Case-2
function add1(num1:any,num2:any):any {
    if(typeof num1 === "string" || typeof num1 === "string")
    return num1 +" "+ num2
}

add1(3,4);
add1("3","4");





// we can use this case we uare using functional overloading    Case-3
// function add3(num1:number, num2:number):number; //this case array input got error
// function add3(num1:string, num2:string):string;
function add3(num1:any,num2:any):any {
    return num1 + num2;
}


add3(2,2);
add3("2","2");
add3([], [])




