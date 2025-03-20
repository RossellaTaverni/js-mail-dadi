/* Crea una lista di email di invitati ad una festa. 
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for. 
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio). 
Si può fare? Certo che si basta ragionare un po’. 
Nota: Non è necessario provvedere alla validazione delle email. */

//----------SCOMPONIAMO IL PROBLEMA----------
// 1. Creiamo un array che contenga una lista di email
// 2. Dichiariamo una variabile per l'inserimento dell'email dell'utente
// 3. Dichiaro una variabile per tenere traccia se l'email è trovata
// 3. Controlliamo se l'email dell'utente è presente nell'array tramite un ciclo for
// 4. Stampiamo messaggio appropriato sull'esito del controllo

let emailList = [
    'rossellataverni@gmail.com',
    'enricotaverni@gmail.com',
    'luigitaverni@gmail.com',
    'mariataverni@gmail.com',
    'asiataverni@gmail.com',
    'vitotaverni@gmail.com',
    'ludovicataverni@gmail.com',
    'roccotaverni@gmail.com',
    'alessandrotaverni@gmail.com',
    'celestetaverni@gmail.com',
];

let userEmail = prompt('Inserisci la tua email');
let accessoGarantito;

for(let i = 0; i < emailList.length; i++){
    if(emailList[i] === userEmail) {
        accessoGarantito = true;
        break;
    }
}

if(accessoGarantito){
    console.log('Accesso consentito! Benvenuto alla festa!')
}
else{
    console.log('Spiacente, non sei invitato alla festa.')
}


/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

//----------SCOMPONIAMO IL PROBLEMA----------
// 1.Dichiarare una variabile con valore random per il giocatore
// 2.Dichiarare una variabile con valore random per il computer 
// 3. Stabilire il vincitore in base al punteggion più alto




