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

    }

    
    }              