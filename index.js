var chalk= require("chalk");
var readLine= require('readline-sync')

var name= readLine.question(chalk.red.underline("What is name? "));
console.log(chalk.green("\n Hi! "+ chalk.cyan.underline(name)+" Enter your Date of birth \n"));


var date= readLine.question(chalk.bgBlack.underline("Date(dd) : " ));
var month= readLine.question(chalk.bgBlack.underline("\nMonth(mm) : " ));
var year= readLine.question(chalk.bgBlack.underline("\nYear(yyyy) :  " ));

console.log(chalk.bgYellow("\n"+date+"-"+month+"-"+year+"\n\n"));

if(year%4===0){
  console.log(chalk.bgGreen.underline("Hey! "+chalk.bgCyan.underline(name)+" you are born in leap year \n"));
}else{
  console.log(chalk.bgMagenta.underline(chalk.bgCyan.underline(name)+" you are not born in leap year \n"));
}