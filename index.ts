// let userName ="Fayiz";
// let subscribers =30000;

// Defining Types (Explicit types)


// let userName:string ="Fayiz";
// let subscribers: number = 4000;
// let isSubscribed: boolean = true

// let Skills : string[] =["js", "css", "ts"]

// let count: number[] = [ 1,2,3,4];

// let emptyArray: [] =[]



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








