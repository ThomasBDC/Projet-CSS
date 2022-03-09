//On peut appeler cette fonction avec un sélecteur CSS
//Comme : .classe ou #identifiant
//
function JqueryDeWishHideAndShow(nameSelecteur){
    var selecteurBalisType = nameSelecteur.charAt(0);
    var selecteurName = nameSelecteur.substring(1);
    if(selecteurBalisType == '.'){
        //c'est une classe
        var myElements = document.getElementsByClassName(selecteurName);
        Array.from(myElements).forEach(element => {

            if(element.classList.contains('hide')){
                element.classList.remove('hide');
            }
            else{
                element.classList.add("hide");
            }
        });

    }
    else if(selecteurBalisType == '#'){
        //c'est un identifiant
        var myElement = document.getElementById(selecteurName);
        if(myElement.classList.contains('hide')){
            myElement.classList.remove('hide');
        }
        else{
            myElement.classList.add("hide");
        }
    }
}