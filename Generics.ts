//Generics


// notmal function 
function getAge(age: string | number){
    return age
}

getAge("44")
getAge(44)


//function with generics add <T> OR <TYPE> ANY NAME
// generics is infering also case-1 

function getAge1<T>(age: T): T{
    return age;
}

getAge1<string>("20");
getAge1<number>(20);


//apply generics in case 2 
type userDetail={
    name:string,
    age:number
}

type AdminDetail={
    firtname: string,
    role:string
}

const userDetail2:userDetail = {
    name:"Debug Media",
    age:20,
}

const adminDetail2:AdminDetail = {
    firtname:"Debug Media",
    role:"admin"
}

function getDetails<T>(details4:T):T{
    return details4;

}

const uservalue = getDetails(<userDetail>(userDetail2));

const adminvalue = getDetails(<AdminDetail>(adminDetail2));


adminvalue.firtname;
uservalue.age;


