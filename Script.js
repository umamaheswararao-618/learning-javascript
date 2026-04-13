console.log(-1);
var num1=1234567891257578888;
console.log(typeof num1);
var num2=1234567891257578888n;
console.log(typeof num2);

if(num1==num2) console.log(-1);
console.log(2**3);
function rprime(num)
{
    for(let i=2;i*i<=num;i++){
        if(num%i==0)
            return false;
    }
    return true;
}
let num=10;
let p=2;
for(let i=1;i<=num;){
    if(rprime(p))
    {
        console.log(p+" ");
        i++;
        
    }
    p++;
}
let a=[];
for(let v=0;v<5;v++)
{
    if(v%2==1)
    a.push(v);
    else
        a.unshift(v);

}
console.log(a);
let b=[10,20,"uma"];
console.log(b);
b.pop();
console.log(b);
b.shift();
console.log(b);

const obj={
    id:1,
    name:"uma",
    a:[1,2,3,"uma"]
}
console.log(obj.id);
console.log(obj.a);
const recipes= [{
    id:1,
    name:"uma",
    a:[1,2,3,"uma"]
    },
{
    id:3,
    name:"uma",
    a:[1,2,3,"uma"]
},
{
    id:2,
    name:"uma",
    a:[1,2,3,"uma"]
}]
    for(const one in recipes){
        console.log(one.id);
    }
   for(const one of recipes){
        console.log(one.id);
        for(const ar in one.a){
            console.log(ar);
        }
    }
 function add(num1,num2){
        return num1;
    }
    console.log(add(10,20))//Hoisting
   function add(num1,num2){
        return num1+num2;
    }
    function m(){
        return 3;
    }
    console.log(m)//returns function
    console.log(m());
    const add1=(a,b)=>{console.log( a+b)};
    const sub=(a,b)=>{console.log( a-b)};
    const mul=(a,b)=>{console.log( a*b)};
    const div=(a,b)=>{console.log( a/b)};
    const i=Number(prompt("Enter a"));
    const j=Number(prompt("Enter b"));
    const num18=prompt("enter num");
    switch(num18){
        case  "+":add1(i,j);break;
        case  "-":sub(i,j);break;
        case  "*":mul(i,j);break;
        case  "/":div(i,j);break;
        default:console.log("invalid");
    }