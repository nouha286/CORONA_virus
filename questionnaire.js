
class Question {
    constructor(ques, choices, answer,type,unite ,min,max) {
        this.ques = ques;
        this.choices = choices;
        this.answer = answer;
        this.type = type;
        this.unite=unite;
        this.max = max;
        this.min=min;

    }
      isCorrectAnswer= function(choice) {
        if(this.answer == choice) {
            return true;
        } else
          return false;
    }
  
 
}
var questions =[
    new Question('Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ?',['oui','non'],null,'radio'),
    new Question('Quelle est votre température corporelle ?',null,null,'input','degrés',34,40),
    new Question('Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ? ',['oui','non'],null,'radio'),
    new Question('Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?',['oui','non'],null,'radio'),
    new Question('Ces derniers jours, avez-vous un mal de gorge ?',['oui','non'],null,'radio'),
    new Question('Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles ?',['oui','non'],null,'radio'),
    new Question('Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?',['oui','non'],null,'radio'),
    new Question('Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?',['oui','non'],null,'radio'),
    new Question('Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?',['oui','non'],null,'radio'),
    new Question('Actuellement, comment vous vous sentez ? ',['bien','assez bien','fatigue','trés fatigue'],null,'radio'),
    new Question('Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.',null,null,'input','ans',15,100),
    new Question('Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ? ',['oui','non'],null,'radio'),
    new Question('Êtes-vous diabétique ? ',['oui','non'],null,'radio'),
    new Question('Avez-vous ou avez-vous eu un cancer ? ',['oui','non'],null,'radio',null),
    new Question('Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ? ',['oui','non'],null,'radio'),
    new Question('Avez-vous une insuffisance rénale chronique dialysée ? ',['oui','non'],null,'radio'),
    new Question('Avez-vous une maladie chronique du foie ?',['oui','non'],null,'radio'),
    new Question('Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.',null,null,'input','Kg',30,120),
    new Question('Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.',null,null,'input','cm',100,190),
    new Question(' Avez-vous une maladie connue pour diminuer vos défenses immunitaires ? ',['oui','non'],null,'radio'),
    new Question('Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).',['oui','non'],null,'radio')
]
document.getElementById('para').style.display="block";
document.getElementById('precedent').hidden=true;

index=0
radio()
function next(){
    
    document.getElementById("form").innerText= "";
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
     

  
    }

    function checkedradio(){

        let ras=document.querySelectorAll("input[name='gender']");
        function find(){
           let select= document.querySelector("input[name='gender']:checked").value;
       
           document.getElementById('results').innerText=select;
           questions[index].answer=select
           results+=questions[index].ques+': ' +questions[index].answer+'<br>'
           console.log( results)}

        ras.forEach(ras=>{
            ras.addEventListener('change',find)
        });
    }
   
    

    function previous(){
        document.getElementById("form").innerText= "";

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
    }

    function radio(){
          document.getElementById('question').innerText =questions[index].ques;
            let formulaire=document.getElementById('form');
        for (let i = 0; i < questions[index].choices.length; i++) {
            formulaire.innerHTML+=`
            <div>
                 <input class="radio my-2" type="radio" name="gender"  id="rad${i}" value="${questions[index].choices[i]}">
                <label id="option${i}" for="rad${i}">${questions[index].choices[i]}</label></div>` ;
          
            checkedradio()  
    }
    
   
}
    function input(){
      let  formulaire=document.getElementById('form');
        document.getElementById('question').innerText =questions[index].ques;
        formulaire.innerHTML =`<div class=" container text-center "  style="display: flex; font-size: 30px; margin-left: 142px;  ">
            <input type="number" min="${questions[index].min}" max="${questions[index].max}" class="text-end" id="in" style="width: 51%;" placeholder="${questions[index].min+"-"+questions[index].max}" >
            <span id="unite" class="input-group-text">${questions[index].unite}</span> </div>`;
          let butdisp= document.getElementById('btnNext')
          let inpu=questions[index].answer=document.getElementById('in')
          
            butdisp.addEventListener('click', () =>{
                questions[index].answer= inpu.value;
                results+=questions[index].ques+': ' +questions[index].answer+'<br>';

                console.log(results)
            });
          
              
           

    }
