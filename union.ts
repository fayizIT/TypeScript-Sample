//  Union / Optional

type Detailss = {
 
    name: string;
    age:number;
    salary:number
    getName ?:()=> void;   //optional adding ternory feature
}


let Skill : (string|number)[] =["js", "css", "ts",121,369,] //Here we can see the numbers also input using union
