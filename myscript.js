/*
Partendo dall'esercizio del biglietto, aggiungiamo la parte visiva come da screenshot
Creiamo un finto biglietto del treno con:
Nome passeggero
Codice treno (numero casuale tra 90000 e 100000 escluso)
Numero carrozza
Prezzo calcolato
Categoria selezionata dall'utente
Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.
Buon lavoro e buon viaggio!
*/


// metto tutto all'interno di una funzione IIFE per lavorare sebza variabili globali

(function (){
    // per prendere i valori del form
    // devo associare un evento al form tipo il submit 
    // e poi posso leggere i valori di ogni campo e quello che l'utente ha inserito

    var userForm = document.querySelector("form");

    // creo l'evento submit sul mio form

    userForm.addEventListener('submit', function(event) {

        // blocco il ricaricamento della pagina ogni volta che premo
        // invio o premo il bottone genera
        event.preventDefault();

        // vado a richiamare i valori dei campi inseriti dall'utente

        var form = event.currentTarget;

        var formElements = form.elements;

        var userName = formElements.completeName.value;
        var userTrip = formElements.yourTrip.value;
        var userAge = formElements.ageRange.value;
        
        
        
        document.getElementById('namePassenger').innerHTML= userName;

        document.getElementById('offerPromo').innerHTML= "Sconto " + userAge;

        document.getElementById('trainCarriage').innerHTML= Math.ceil((Math.random() * 10));
        

        randomNumbers(90000, 100000);
        document.getElementById('ticketCode').innerHTML= randomNumbers(90000, 100000);;
        
        ticketCostIs(userTrip, userAge);
        document.getElementById('ticketCost').innerHTML= ticketCostIs(userTrip, userAge)+ "€";
        
        //var ticketName = nomeUtente.toUppercase();
        createTicket();

    })

    var btnReset = document.getElementById('btnReset');

    btnReset.addEventListener('click', function(){
        

        btnReset.style.border = "2px solid #9C609D";
        deleteTicket();

    })

    var btnCreateTicket = document.getElementById('btnCreateTicket');

    btnCreateTicket.addEventListener('click', function(){

        btnCreateTicket.style.border = "2px solid #9C609D";

    })



    // FUNZIONI

    function  createTicket() {
        var ticket = document.getElementById('ticketData');
        if (ticket.style.display === "none") {
            ticket.style.display = "none";

        } else {
            ticket.style.display = "block";

        }
    }

    function  deleteTicket() {
        var ticket = document.getElementById('ticketData');

        ticket.style.display = "none";

    }

    function randomNumbers(min, max) {
        return parseInt(Math.random() * (max - min) + min);
    }

    function ticketCostIs(trip, age) {
        if (trip < 1) {
            alert('Devi inserire un numero maggiore di 1!')
        
        } else if (isNaN(trip)) {
            alert('devi inserire un numero maggiore di 0!!!');
        
        } else {
            var ticketKmCost = 0.21; // € al km
        
            var totTicketEuro = (ticketKmCost * trip).toFixed(2);
        
            if (age === "Maggiorenne") {
            
                return totTicketEuro;
            
            } else if (age === "Minorenne") {
                var totTicketEuroTeen = ((totTicketEuro) - ((totTicketEuro * 20) / 100)).toFixed(2);
                
                return totTicketEuroTeen;
                
            
            } else if (age === "Over 65") {
                var totTicketEuroSenior = ((totTicketEuro) - ((totTicketEuro * 40) / 100)).toFixed(2);
                
                return totTicketEuroSenior;
            
            }
        }
    
    }
})()














































































