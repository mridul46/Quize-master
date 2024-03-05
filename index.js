const questions=[{
    'ques':'Inside which HTML element do we put the JavaScript?',
     'a':'<script>',
     'b':' <js>',
     'c':'<scripting>',
     'd':'<javascript>',
     'correct':'a'
},
{
    'ques':'Where is the correct place to insert a JavaScript?',
    'a':'The <head> section',
    'b':'the <body> section',
    'c':'Both the <head> section and the <body>section',
   'd':'None',
   'correct':'a'
},
{
    'ques':'How do you write "Hello World" in an alert box?',
    'a':'alertBox("Hello World");',
    'b':'msg("Hello World");',
    'c':'alert("Hello World");',
    'd':'msgBox("Hello World");',
    'correct':'c'
},
{
    'ques':'How to write an IF statement in JavaScript?',
    'a':'if i==5 then',
    'b':'if(i==5)',
    'c':'if i=5',
    'd':'if i=5 then',
    'correct':'b'
},
{
    'ques':'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    'a':'if(i<>5)',
    'b':'if(i!=5)',
    'c':'if i<>5',
    'd':'if i!=5 then',
    'correct':'b'
},
]

let index=0;
let total=questions.length;
let right=0;
let wrong=0;
const quesBox=document.getElementById("quesBox");
const optionInputs=document.querySelectorAll(".options");
const loadQuestion=()=>{
    if(index===total){
        return endQuiz();
    }
    reset();
    const data= questions[index];
    // console.log(data);
    quesBox.innerText=`${index+1}) ${data.ques}`;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
}

const submitQuize=()=>{
       const data= questions[index];
       const ans=getAnswer()
    //    console.log(ans,data.correct);
      if(ans===data.correct){
        right++;
      }else{
        wrong++;
      }
      index++;
      loadQuestion();
    return;
}
const getAnswer=()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
               answer=input.value;
            
            }
           
        }
    )
    return answer;
    
}
const reset=()=>{
    optionInputs.forEach(
        (input)=>{
         input.checked=false;
        }
    )

}
const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <div style=" text-align:center">
    <h3>Thank you for playing the quize</h3>
    <h2> ${right}/${total} are correct</h2>
    </div>
    `

}
//intial call
loadQuestion();

