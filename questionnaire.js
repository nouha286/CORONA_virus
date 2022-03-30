class Question {
    constructor(ques, choices, answer,type,gravite,unite ,min,max) {
        this.ques = ques;
        this.choices = choices;
        this.answer = answer;
        this.type = type;
        this.unite=unite;
        this.min=min;
        this.max = max;
        this.gravite=gravite;

    }   
}

var questions =[
    new Question('Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ?',['oui','non'],null,'radio','fievre'),
    new Question('Quelle est votre température corporelle ?',null,null,'input',null,'degrés',34,42),
    new Question('Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ? ',['oui','non'],null,'radio','toux'),
    new Question('Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?',['oui','non'],null,'radio','courbatures'),
    new Question('Ces derniers jours, avez-vous un mal de gorge ?',['oui','non'],null,'radio','malgorge'),
    new Question('Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles ?',['oui','non'],null,'radio','diarrhee'),
    new Question('Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?',['oui','non'],null,'radio','fatigue'),
    new Question('Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?',['oui','non'],null,'radio','diffaliment'),
    new Question('Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?',['oui','non'],null,'radio','generespiratoire'),
    new Question('Actuellement, comment vous vous sentez ? ',['bien','assez bien','fatigue','trés fatigue'],null,'radio','sensationmalaise'),
    new Question('Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.',null,null,'input',null,'ans',12,100),
    new Question('Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ? ',['oui','non'],null,'radio','facteurpronostique'),
    new Question('Êtes-vous diabétique ? ',['oui','non'],null,'radio','facteurpronostique'),
    new Question('Avez-vous ou avez-vous eu un cancer ? ',['oui','non'],null,'radio',null,'facteurpronostique'),
    new Question('Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ? ',['oui','non'],null,'radio','facteurpronostique'),
    new Question('Avez-vous une insuffisance rénale chronique dialysée ? ',['oui','non'],null,'radio','facteurpronostique'),
    new Question('Avez-vous une maladie chronique du foie ?',['oui','non'],null,'radio','facteurpronostique'),
    new Question('Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.',null,null,'input',null,'kg',30,120),
    new Question('Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.',null,null,'input',null,'cm',100,190),
    new Question(' Avez-vous une maladie connue pour diminuer vos défenses immunitaires ? ',['oui','non'],null,'radio','facteurpronostique'),
    new Question('Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).',['oui','non'],null,'radio','facteurpronostique')
 ]
document.getElementById('para').style.display="block";


index=0
radio()
function next(){
    progress();
    index++;
    document.getElementById("form").innerText= "";

    if (index>=questions.length) {
        document.getElementById('precedent').style.display='none';
        document.getElementById('btnNext').hidden=true;
        document.getElementById("question").innerText= "";


        document.getElementById("results").innerHTML='<button  class="btn btn-lg mt-3  me-5" style="background-color: #1078AD; color: white;" onclick=" algorithm();">Terminer le test</button>';

       

    }else {
        document.getElementById('btnNext').hidden=false;
        document.getElementById('precedent').hidden=false;

        if(questions[index].type=='radio') radio()
        else if(questions[index].type=='input') input()

    }
   
   
  
    if(index!=0) 
        {
            document.getElementById('precedent').hidden=false;
            document.getElementById('para').style.display="none";
    }
   
  
}

    function checkedradio(){
        document.getElementById('btnNext').disabled = true;

        let ras=document.querySelectorAll("input[name='gender']");
        function find(){
           let select= document.querySelector("input[name='gender']:checked").value;
       
           questions[index].answer=select
           document.getElementById('btnNext').disabled = false;

          }

        ras.forEach(ras=>{
            ras.addEventListener('change',find)
        });
    }
   
    

    function previous(){
        diminute();
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
      document.getElementById('btnNext').disabled = true;

        document.getElementById('question').innerText =questions[index].ques;
        formulaire.innerHTML =`<div class=" container text-center "  style="display: flex; font-size: 30px; margin-left: 142px;  ">
            <input type="number" min="${questions[index].min}" max="${questions[index].max}" class="text-end" id="in" style="width: 51%;" placeholder="${questions[index].min+"-"+questions[index].max}" >
            <span id="unite" class="input-group-text">${questions[index].unite}</span> </div>`;
          let inpu=document.getElementById('in')
          formulaire.addEventListener('click',()=>{
            questions[index].answer= inpu.value;
            document.getElementById('btnNext').disabled = false;
          })
                
               
        
    }

     j=2;
      
    function progress()
    {
    
     
        prog=4.6;
        document.getElementById('prog').style.width=""+prog*j+"%";
        
         document.getElementById('j').innerText=j+"/22";
        j++;


      
    }

    function diminute()
    {
      
      
       
        document.getElementById('prog').style.width=""+prog*j-4.6+"%";
        
       
     j--;
     document.getElementById('j').innerText=j+"/22";

    }


    
function algorithm(){
    let result='';
    let age=0;
    let fievres=false;
    let touxs=false;
    let courbature=false;
    let diarrhes=false;
    let facteurdegravMaj=0;
    let facteurdegravMin=0;
    let facteurpronostiques=0;
    let fatigues=false;
    let generespiratoires=false;
    let malgorges =false;
    let diffaliments=false;
    let degress=0;


    for (let i = 0; i <questions.length; i++) {
       if(questions[i].gravite=='facteurpronostique'){
         facteurpronostiques++;
       }
       if(questions[i].gravite=='fievre'&& questions[i].answer=='oui'){
        fievres=true
        if(questions[i].unite="degrés") {
            degress=questions[i].answer
           }
      }
      if(questions[i].gravite=='touxs'&& questions[i].answer=='oui'){
        touxs=true
      }
      if(questions[i].gravite=='diarrhee'&& questions[i].answer=='oui'){
        diarrhes=true
      }
      if(questions[i].gravite=='courbatures'&& questions[i].answer=='oui'){
        courbature=true
      }
      if(questions[i].gravite=='fatigue'&& questions[i].answer=='oui'){
        fatigues=true
        facteurdegravMin++
      }
      if(questions[i].gravite=='sensationmalaise'&& (questions[i].answer=='trés fatigue'||questions[i].answer=='fatigue')){
        facteurdegravMin++
      }
      if(questions[i].gravite=='generespiratoire'&& questions[i].answer=='oui'){
        generespiratoire=true;
        facteurdegravMaj++;
      }
      if(questions[i].gravite=='malgorge'&& questions[i].answer=='oui'){
        generespiratoires=true;
        facteurdegravMaj++;
      }
      if(questions[i].gravite=='diffaliment'&& questions[i].answer=='oui'){
        diffaliments=true;
        facteurdegravMaj++;
      }
      if(questions[i].gravite=='malgorge'&& questions[i].answer=='oui'){
        malgorges=true;
        facteurdegravMaj++;
      }
      if(questions[i].unite="ans") {
        age=questions[i].answer
       }
     

      if(degress>=39){
          facteurdegravMin++
      }else if(degress<=35.4){
        facteurdegravMaj++
      }
      if(facteurpronostiques>0 && (age<15 || age>70)) result=`Prenez contact avec votre médecin généraliste au moindre 
          doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins 
          de 15 ans. En cas d’urgence, appeler le 15. `;
      
      if (fievres==true||(touxs==true && malgorges==true) || ( touxs==true && courbature==true) || (fievres==true && diarrhes==true))
      {
        if (facteurpronostiques==0) {
            if((facteurdegravMin==0 && facteurdegravMaj==0) && age<50) result='nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes.";'
            
            if((facteurdegravMin==0 && facteurdegravMaj==0 )&& (age< 50 && age> 69)|| facteurdegravMin>=1)  result="téléconsultation ou médecin généraliste ou visite à domicile";
           
        }
        if (facteurpronostiques>=0) {
            if((facteurdegravMin==0 && facteurdegravMaj==0 )|| facteurdegravMin == 1) result="téléconsultation ou médecin généraliste ou visite à domicile";
            if(facteurdegravMin>=2) result ='<p style="color:red; font-size: xx-large;">Appelez</p>';
        }
        if(facteurpronostiques>=0 && facteurdegravMaj>=1) result ='<p style="color:red;font-size: xx-large;">Appelez</p>';

      }
      if (touxs==true && fievres==true )
      {
         if(facteurpronostiques==0){
             if(facteurdegravMaj==0 && facteurdegravMin>=1)  result="téléconsultation ou médecin généraliste ou visite à domicile";
            }
            if(facteurpronostiques>=1){
                if((facteurdegravMaj==0 && facteurdegravMin==0)) result="téléconsultation ou médecin généraliste ou visite à domicile";
                if( facteurdegravMin==1) result="téléconsultation ou médecin généraliste ou visite à domicile";
                if( facteurdegravMin>1) result='<p style="color:red;font-size: xx-large;">Appelez 141</p>';
            }
    }
    if (fievres==true || touxs==true || malgorges==true ||  courbature==true)
    {
        if (facteurdegravMaj==0 && facteurdegravMin==0) result="Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé. Au moindre doute, appelez le 141."; 
        if ((facteurdegravMaj>0 || facteurdegravMin>0) || facteurpronostiques>0) result='<p style="color:red;font-size: xx-large;">Appelez 141</p>'; 
            

    }
   else result="Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation. Pour toute information concernant le Covid-19 allez vers la page d’accueil.";

   
}

document.getElementById('pos').innerHTML=` <div class="progress" style="height: 1px;">
<div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem; background-color:#2B8EC1;"></button>
<button type="button" class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem; background-color:#2B8EC1;"></button>
<button type="button" class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill" style="width: 2rem; height:2rem; background-color:bisque;"></button>`

document.getElementById('results').innerHTML=`<div>
<section class="text-center d-flex justify-content-center align-items-center w-100 p-5">
<div class="card   px-5 py-5  mb-1 border-1 style_card ">
<h5 style="font-size: xx-large;color:green"> Résultats</h5>
<p style=" font-size: xx-large">${result}</p>
<hr>
<p class="font-weight-light">Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre
température deux fois par jour. Rappel des mesures d’hygiène.</p>
</div>
</div>
</section>
<div class=" text-center">
<button type="submit" id="step" style="color: #1078AD;border: 2px solid #1078AD;width: 200px;font-weight: 700;background-color: rgba(16, 121, 173, 0.2);transition: .2s; padding: 1.5rem 1rem;font-size: 1.25rem;margin-left: auto;
margin-right: auto;display: block;border-radius: 0.3rem;"><a style="text-decoration: none; color:  #1078AD;" href="Preambule.html"> Recommencer le test</a></button>
</div>

`;


}
