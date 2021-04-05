/*const greeter1 = "hey hi"
  const timer1 = 4;
  if(timer1 >3){
      const greeter1 = "say hello"
  }
  alert(greeter1);
  
  let greeter2 = "hey hi"
  let timer2 = 4;
  if(timer2 >3){
      let greeter2 = "say hello"
  }
  alert(greeter2);
  
  var greeter3 = "hey hi"
  var timer3 = 4;
  if(timer3 >3){
      var greeter3 = "say hello"
  }
  alert(greeter3);*/
  
//  var person  = { firstname : "raja",
   //               lastname  : "sai harish"};
//alert (typeof(person));
//alert(5+6);
/*function myfunc(a,b) {
  return a+b;
}
 var data = document.getElementById("b1").value;
function func(){
  let a = document.getElementById("firstvalue").value
  let b = document.getElementById("lastvalue").value



}*/
/*let addlem = document.getElementById("add")
addlem.addEventListener("click",()=>{
  let a = document.getElementById("firstvalue").value;
  let b = document.getElementById("lastvalue").value;
  let sum = Number(a)+ Number(b);
   alert(sum);
   
})*/
let abc = document.getElementById("outer")
 abc.addEventListener("click" , (h)=> {
   h.stopPropagation();
   alert("you are safe");
 });
 let abcd = document.getElementById("middle")
 abcd.addEventListener("click" , (i)=> {
   i.stopPropagation();
   alert("you are moderate safe");
 });
 let abcc = document.getElementById("inner")
 abcc.addEventListener("click" , (k)=> {
   k.stopPropagation();
   alert("you are in danger zone");
 });