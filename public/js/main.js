// # Exo 1 Boucles FOREACH
//     ## - Creer une varaible de type array et inserez toutes les personnes de la classe
//     ## - A l'aide d'une boucle foreach, dites bonjour + prenom à chaque personne du tableau
let classe = ["agim", "adil", "ali", "mouna", "yassine", "elvis", "chris", "antoine", "jean", "fanny", "haroune", "ilias D","ilias E","lira","nasila","seif","stan","van hoa","nathan", "kevin" ];
 classe.forEach(element => {
     console.log(`bonjour ${element}`);
 });


// - # Exo 2 Boucle FOREACH
//     - ## Créez un un array qui contient 5 éléments
let tab =["el1", "el2", "el3", "el4", "el5"];
//     - ## Affichez touts les éléments a l'aide d'une boucle foreach
tab.forEach(element => {
    console.log(`${element}`);
});