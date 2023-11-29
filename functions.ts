type FunctionDetails = {
 
    name: string;
    age:number;
    salary:number
    Subject:string
    getName:()=> void;  

}
type SecondFunctionDetails = {
 
    name: string;
    age:number;
    branch:string;
    Grade:string
    getName:()=> void;  

}

let TutorDetail :FunctionDetails ={
name:"Rini",
age:55,
salary:300000,
Subject:"Data Structure",
getName(){
    console.log(this.name);   
}
}


let StudentDetail :SecondFunctionDetails ={
    name:"fayiz",
    age:25,
    branch:"Computer Science",
    Grade :"A",
    getName(){
        console.log(this.name);   
    }
    }


//functions
function getUserName(TutorDetail :FunctionDetails, StudentDetail :SecondFunctionDetails)  ///define the TutorDetail is from FunctionDetails. otherwise its doesnt display the predictions
{
  return TutorDetail.name,StudentDetail.Grade
}

 getUserName(TutorDetail, StudentDetail)