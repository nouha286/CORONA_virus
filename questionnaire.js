
class Question {
    constructor(ques, choices, answer,type,unite) {
        this.ques = ques;
        this.choices = choices;
        this.answer = answer;
        this.type = type;
        this.unite=unite;

    }
    isCorrectAnswer(choice) {
        if(this.answer == choice) ;
    }
  
 
}
var questions =[
    new Question('Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ?',['oui','non'],'oui','radio',null),
    new Question('Quelle est votre température corporelle ?',null,null,'input','degrés'),
    new Question('Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ? ',['oui','non'],'oui','radio',null),
    new Question('Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?',['oui','non'],'oui','radio',null),
    new Question('Ces derniers jours, avez-vous un mal de gorge ?',['oui','non'],'oui','radio',null),
    new Question('Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles ?',['oui','non'],'oui','radio',null),
    new Question('Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?',['oui','non'],'oui','radio',null),
    new Question('Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?',['oui','non'],'oui','radio',null),
    new Question('Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?',['oui','non'],'oui','radio',null),
    new Question('Actuellement, comment vous vous sentez ? ',['bien','assez bien','fatigue','trés fatigue'],'oui','radio',null),
    new Question('Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.',null,null,'input','ans'),
    new Question('Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ? ',['oui','non'],'oui','radio',null),
    new Question('Êtes-vous diabétique ? ',['oui','non'],'oui','radio'),
    new Question('Avez-vous ou avez-vous eu un cancer ? ',['oui','non'],'oui','radio',null),
    new Question('Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ? ',['oui','non'],'oui','radio',null),
    new Question('Avez-vous une insuffisance rénale chronique dialysée ? ',['oui','non'],'oui','radio',null),
    new Question('Avez-vous une maladie chronique du foie ?',['oui','non'],'oui','radio',null),
    new Question(' Êtes-vous enceinte ? ',['oui','non','man'],'oui','radio',null),
    new Question('Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.',null,null,'input','Kg'),
    new Question('Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.',null,null,'input','cm'),
    new Question(' Avez-vous une maladie connue pour diminuer vos défenses immunitaires ? ',['oui','non'],'oui','radio',null),
    new Question('Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).',['oui','non'],'oui','radio',null)
]
document.getElementById('para').style.display="block";


index=0
document.getElementById('question').innerText =questions[index].ques;
document.getElementById('option0').innerText =questions[index].choices[0];
document.getElementById('option1').innerText =questions[index].choices[1];
document.getElementById('option2').hidden =true
document.getElementById('option3').hidden =true  
document.getElementById('rad2').hidden =true;
document.getElementById('rad3').hidden =true;
document.getElementById('in').style.display ='none';
document.getElementById('unite').hidden =true

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
        if(questions[index].type=='radio') radio()
        else if(questions[index].type=='input') input()  
    //    let gender =document.forms[0];
    //    txt=[];
    //    let i;
    //    let j=0;
    //    for (i=0; i< gender.length; i++)
    //    {
    //        if(gender[i].checked)
    //        {
    //            txt[j]=gender[i].value;
    //            j++;
    //        }
        

    //    }
       
    //     document.getElementById('results').innerText=txt[j];
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
       
      
        if(questions[index].type=='radio') radio()
        else if(questions[index].type=='input') input()    
        index--;
        document.getElementById('progress').style.width =prog+prog;
    }

    function radio(){
        
        document.getElementById('option0').hidden =false
        document.getElementById('option1').hidden =false
        document.getElementById('in').hidden =true;
        document.getElementById('rad0').hidden =false;
        document.getElementById('rad1').hidden =false;
        document.getElementById('unite').hidden =true

        
          document.getElementById('question').innerText =questions[index].ques;
          document.getElementById('option0').innerText =questions[index].choices[0];
          document.getElementById('option1').innerText =questions[index].choices[1];
         
          if(questions[index].choices.length>1){
            for (let i = 0; i <questions[index].choices.length; i++) {
              document.getElementById('option'+i).hidden =false
              document.getElementById('rad'+i).hidden =false;
              document.getElementById('option'+i).innerText =questions[index].choices[i];
             
            }
            
        }
        
         
    }
    function input(){
        document.getElementById('in').style.display ='block';

        document.getElementById('question').innerText =questions[index].ques;
        document.getElementById('unite').innerText =questions[index].unite;

            document.getElementById('option0').hidden =true
            document.getElementById('option1').hidden =true
            document.getElementById('option2').hidden =true
            document.getElementById('option3').hidden =true
                document.getElementById('rad0').hidden =true;
                document.getElementById('rad1').hidden =true;
                document.getElementById('rad3').hidden =true;
                document.getElementById('rad2').hidden =true;
                document.getElementById('in').hidden =false;
                document.getElementById('unite').hidden =false

    }