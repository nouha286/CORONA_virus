
if (fievre==1||(toux==1 && malgorge==1) || ( toux==1 && courbatures==1) || (fievre==1 && diarrhée==1)){

    if (facteurgrav>0) {
        this.Result("appelez le 141");
    }
    
    if (((age>50 && age<69) && facteurdegrav==0) || facteurdegrav == 0 ) {
        this.result("nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes.");
        
    }else if (((age>50 && age<69) && facteurdegrav==0) || facteurdegravmin > 0 ){
        this.result("téléconsultation ou médecin généraliste ou visite à domicile");
    }else if (facteurdegravmin<=1)
         {
            this.result("éléconsultation ou médecin généraliste ou visite à domicile");
            
        }else{
            this.result("appel 141");
        }else if (facteurpronostique<=1){

            if (fievre==1 && toux==1) {
                        if (facteurdegravmin<=2) {
                            this.result("appel 141");
                        }else{
                            this.result("téléconsultation ou médecin généraliste ou visite à domicile");
                        }
        }
    }else if(fievre==1 || toux==1 || malgorge==1 || courbatures==1){
        if (facteurgarv>0 ||facteurpronos>0) {
            this.result=("Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé. Au moindre doute, appelez le 141.");                
        }else{
            this.result=("Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute.")

        }

    }else{
        this.result=("Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation. Pour toute information concernant le Covid-19 allez vers la page d’accueil.");
    }
    }              