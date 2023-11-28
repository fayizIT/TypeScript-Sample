//Type
type Detail = {
 
    name: string;
    age:number;
    salary:number
    getName:()=> void;  

}

let userDetail :Detail ={
name:"fayiz",
age:25,
salary:300000,
getName(){
    console.log(this.name);   
}
}