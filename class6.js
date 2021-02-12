// variable stores numeric value
var one=1;
//variable stores string value

var two="two";
// declared a variable without assigning a value
var three;

console.log(one);
console.log(two);
console.log(three);


//declare variable in a single line
var One=1,Two="two",Three;
console.log(One);
console.log(Two);
console.log(Three);

//white space and line break 
var 
      oNe 
      =
      1;
           tWo
               = 
                  "tWo";
                  console.log(oNe);
                  console.log(tWo);
//
var one=1;// nemeric
    one="one";//string
    one=1.1;//decimal
    one=true;//boolean
    one=null;//null
    console.log(one)

// bharath          srikanth         
// variables         data
//how long
function familycom(areusafe,howisurwork,temp){

}
familycom("yes","cool",42.2)
class Family{
    areusafe="yes"
    howisurwork="cool"
    whatstemp=43.2 

}
let p = new Family()
//object menory  address { real person eye's}
console.log(p.howisurwork)
console.log(p.whatstemp)


// with out paramenters value
//function name is Sayhi
// parameters list empty

function Sayhi(){
    console.log("hello dear")
}
//function name called Sayhi()
// display hello dear
Sayhi()


// with paramenters value
//function name is Hello
// parameters list name,age

function Hello(name,age){
    console.log(name+"is"+age+"old")

}
//function name called Hello(name,age)
//paramenter values ("srikanth",23)
Hello("srikanth",23)


function firstfunction(first, last) {
    var full;
    full = first + last;
    return full;
 }
 function secondFunction() {
    var result;
    result = firstfunction('sreekanth', 'chowdary');
    console.log (result );
 }
 secondFunction()

 function hypotenuse(a,b){
   function square(x){
     return x*x;
   }
   return Math.sqrt(square(a)+square(b));

 }
 function second(){
   var result;
   result=hypotenuse(1,2);
   console.log(result);
 }
 second()



// array
        //index 0          1               2
variable=["areusafe","howisurwork","whatstemp"]
// index 0     1    2
data=["yes","cool",43.2]
console.log(data[0])
//push mean add last element
data.push("friday")
console.log(data)
//pop mean remove last element
data.pop()
console.log(data)
//shift mean remove first element
data.shift()
console.log(data)
//unshift mean add first element
data.unshift("srikanth")
console.log(data)

//object

bharath={
    //key   
    areusafe: "yes",
    howisurwork: "cool",
    whatstemp: 43.2
}
console.log(bharath["areusafe"])
console.log(bharath.howisurwork)


// boolean is true r false

var b1 = Boolean(100);
var b2 = Boolean(3.14);
var b3 = Boolean(-15);
var b4 = Boolean("Hello");
var b5 = Boolean('false');
var b6 = Boolean(1 + 7 + 3.14);
console.log(
"100 is " + b1 + "<br>" +
"3.14 is " + b2 + "<br>" +
"-15 is " + b3 + "<br>" +
"Any (not empty) string is " + b4 + "<br>" +
"Even the string 'false' is " + b5 + "<br>" +
"Any expression (except zero) is " + b6);

Math.PI;
console.log(Math.PI)
//its round using math is a mathematical (x)round is 
Math.round(3.2);
console.log(Math.round(3.2))
// pow define power ex (x,y) x is a value y is apower
Math.pow(8,2);
console.log(Math.pow(8,2));
// sqrt is square root (x)
Math.sqrt(9)
console.log(Math.sqrt(9))
// abs is absolute is a positive value of x

Math.abs(-6.8);
console.log(Math.abs(-6.8));

// crbt is cubic root of x 
Math.cbrt(6);
console.log(Math.cbrt(6));

// vote eligible are not 

//function
function myvote()
{
    //variable
    var age,voteable;
    age=console.log(age);
    voteable=(age<18)?"to young " :" old enoug"
}

//function name
myvote()

var age, vote;
age=10;
console.log("age");
vote=(age<18)?"eligible":"not eligible";
console.log(vote);

variable=["hadudinner","whatspl","okbye"]
// index 0     1    2
data=["yes","vegrice","goodnignt"]
console.log(data[0])
//push mean add last element
data.push("sweetdrems")
console.log(data)
//pop mean remove last element
data.pop()
console.log(data) 


//variable name day

var day;
//using switch statement
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
console.log(day);

// variable a is enter the month number
//iam using prompt but its not display 

var a=console.log("enter the month number");

//variable b is empty name 
var b="";
switch(a){
case 1:
b="jan";
break;
case 2:
b="feb";
break;
case 3:
b="mar";
break;
case 4:
b="apl";
break;
case 5:
b="may";
break;
case 6:
b="jun";
break;
case 7:
b="jul";
break;
case 8:
b="aug";
break;
case 9:
b="sep";
break;
case 10:
b="oct";
break;
case 11:
b="Nov";
break;
case 12:
b="dec";
break;
}
if((a==12)||(a==1)||(a==2))
{
console.log(" It is " + a + ", which is in winter.")
}
if((a==3)||(a==4)||(a==5))
{
console.log(" It is " + a + ", which is in spring.")
}
if((a==6)||(a==7)||(a==8))
{
console.log(" It is " + a + ", which is in summer.")
}
if((a==9)||(a==10)||(a==11))
{
console.log(" It is " + a + ", which is in fall.")
}





