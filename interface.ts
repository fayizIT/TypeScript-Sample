//interface

interface Details {
    name: string;
    age:number;
    salary:number
    getName:()=> void;
}

let user :Details ={
    name:"fayiz",
    age:25,
    salary:300000,
    getName(){
        console.log(this.age)
    } 
}

let admin :Details ={
    name:"fayiz",
    age:25,
    salary:300000,
    getName(){
        console.log(this.name);
        
    }
}
