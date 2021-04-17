var readlineSync= require("readline-sync");
var score=0;

const questions=[{
      question:"Where do I live?",
      answer:"ban"
},
{
  question:"What is my favourite food?",
  answer:"pizza"
},
{
  question:"What is my favoourite superher?",
  answer:"batman"
}
]

const highScores=[
  {
    name:"akash",
    score:3
  },{
    name:"akshita",
    score:2
  }
]


function welcome(){
    var name=readlineSync.question("May I have your name?");
             readlineSync.question(`Hello ${name}. Do you know me?`);
}

welcome();
game();
showScores();

function game(){
    for(let i=0;i<questions.length;i++){
        let answer= readlineSync.question(questions[i].question);
        if(answer===questions[i].answer){
          score++;
          console.log("Correct! Your score is "+score);
        }
        else{
          console.log("Wrong!");
        }     
    } 
}



function showScores(){
     console.log("Yay you scored "+score);
     console.log("Check out the high scores, if you should be there ping me and I'll update it");
     highScores.map(function(scoreData){
         console.log(`${scoreData.name}:${scoreData.score}`);
     });       
}