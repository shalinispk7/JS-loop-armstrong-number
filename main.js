// armstrong-number that is equal to the sum of cubes of its digits
let a=154;
let num=a;
let res = 0;
document.write("Armstrong-number that is equal to the sum of cubes of its digits");
document.write("<br>");
for(;a!=0;){
	remind=a%10;
	res= res + (remind*remind*remind);
	a=parseInt(a/10);
	// a = parseInt(a)
}
if(num==res){
	document.write("The given number is "+num+"  and it is an armstrong number")
}
else{
	document.write("The given number is "+num+" and it is not an armstrong number")
}