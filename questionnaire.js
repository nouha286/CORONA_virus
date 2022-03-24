
class Question {
    constructor(ques, choices, answer) {
        this.ques = ques;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer == choice;
    }
  
 
}

var questions =[
    new Question('Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ?',['oui','non'],'oui'),
    new Question('Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?',['oui','non'],'oui'),
    new Question('Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?',['oui','non'],'oui'),
    new Question('Ces derniers jours, avez-vous un mal de gorge ?',['oui','non'],'oui'),
    new Question('Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles ?',['oui','non'],'oui')

]
document.getElementById('para').style.display="block";


index=0
document.getElementById('question').innerText =questions[index].ques;
document.getElementById('option1').innerText =questions[index].choices[0];
document.getElementById('option2').innerText =questions[index].choices[1];
prog= document.getElementById('progress').value;
document.getElementById('precedent').hidden=true;

function next(){
    
    if (index>=questions.length)  index=0;
    if(index==0)
    {
        document.getElementById('precedent').hidden=true;
        
    } 
    index++;
    if(index!=0) 
        {
            document.getElementById('precedent').hidden=false;
            document.getElementById('para').style.display="none";
        }
    
      document.getElementById('question').innerText =questions[index].ques;
      document.getElementById('option1').innerText =questions[index].choices[0];
      document.getElementById('option2').innerText =questions[index].choices[1];
    
      document.getElementById('progress').style.width =prog+prog;
       let gender =document.forms[0];
       txt=[];
       let i;
       let j=0;
       for (i=0; i< gender.length; i++)
       {
           if(gender[i].value!=null)
           {
               txt[j]=gender[i].value;
           }
       }
       
        document.getElementById('results').innerText=txt[j];
    }

    

    function previous(){
       
        if (index<0)  index=questions.length-1;
        if(index==0) 
        {
            document.getElementById('precedent').hidden=true;
            document.getElementById('para').style.display="block";

        }
       
        if(index!=0) 
        {
            document.getElementById('precedent').hidden=false;
            document.getElementById('para').style.display="none";
        }
       
      
        document.getElementById('question').innerText =questions[index].ques;
        document.getElementById('option1').innerText =questions[index].choices[0];
        document.getElementById('option2').innerText =questions[index].choices[1];
        index--;
        document.getElementById('progress').style.width =prog+prog;
    }

  