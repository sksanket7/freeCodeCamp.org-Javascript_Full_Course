console.log("Lets see some function details");

//Re-usable functions
console.log("\n1.Re-usable functions **");
function addAandB(a,b){
    console.log(a+b);
}
//calling the fucntion
addAandB(12,14);


//Scope => Global/Local
console.log("\n2.Scope => Global/Local **");
var globalVariable = 10;

/* Inside the fuction if we don't mention our
variable as 'var' then it becomes Global
And if we declare it as 'var' then its Scope
remains Local */
console.log("Inside the fuction if we don't mention our \nvariable as 'var' then it becomes Global \nAnd if we declare it as 'var' then its Scope \nremains Local");
//Local
console.log("\nLocal");

function LocalScope(){
    localVariable = 6;
}

function checkLocalScope(){
    if(globalVariable == 10){
        console.log("Value of Gloabal variable which is defined using var keyword.");
    }else{
        console.log("can not access local variable from any method defined using 'var' keyword");
    }
    
}

checkLocalScope();