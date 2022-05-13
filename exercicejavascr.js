
function fboutton(){
    // affiche dans la div le contenue du champ texte
    val_texte=document.getElementById("name").value // 100

    console.log(val_texte); //affiche la valeur présente dans le champs teste
    console.log(typeof(val_texte)); // typof est une fonction qui affiche le type de la variable
    val_texte_tva=val_texte*1.2 //120 : Valeur entré dans le texte * 1.2
    document.getElementById("div_texte").innerHTML="Le pric TTC est :" + val_texte_tva;


    console.log(isNaN(val_texte)); //12 - FALSE "hello" - true
    // Si le texte entré est un nombre alors on affiche la TVA

    if(isNaN(val_texte) == false) {
    // Affichage de la TVA dans la div
    document.getElementById("div_texte").innerHTML= "Le pric TTC est :" + val_texte_tva;

    }
    // si ce n'est pas un nombre
    else { 
        document.getElementById("div_texte")
    }


}
