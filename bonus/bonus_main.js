/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */



// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero
    //aggiungo la variabile nome per salutare l'utente
    const user_name = prompt("Ciao user, come ti chiami?")
    console.log(user_name); 

    //dichiaro le variabili per l'età e i km e ne prendo il dato tramite un prompt
    const user_age = Number(prompt(`Ciao ${user_name}, inserisci la tua età`));
    const user_km = Number(prompt("Ora inserisci i Km che dovrai fare"));
    console.log(user_age);
    console.log(user_km);  


// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

    // il prezzo del biglietto è definito in base ai km (0.21 € al km) e ne dichiaro la variabile 
    let ticket_price = user_km * 0.21
    let ticket_discount

    if(user_age < 18){
        // va applicato uno sconto del 20% per i minorenni (età > 18)
        ticket_discount = ticket_price * 0.2
        ticket_price = ticket_price - ticket_discount

        // L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
        console.log(`Ciao ${user_name}, il tuo bligetto avrà un costo di ${ticket_price.toLocaleString("en-US", {style:"currency", currency:"EUR"})}, dato che hai ${user_age} anni. Risparmiando quindi ${ticket_discount.toLocaleString("en-US", {style:"currency", currency:"EUR"})}.`);
        
    }else if(user_age > 65){

        // va applicato uno sconto del 40% per gli over 65. (età > 65)
        ticket_discount = ticket_price * 0.4
        ticket_price = ticket_price - ticket_discount

        // L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
        
        console.log(`Ciao ${user_name}, il tuo bligetto avrà un costo di ${ticket_price.toLocaleString("en-US", {style:"currency", currency:"EUR"})}, dato che hai ${user_age} anni. Risparmiando quindi ${ticket_discount.toLocaleString("en-US", {style:"currency", currency:"EUR"})}.`);
    }else{

        // L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
        console.log(`Ciao ${user_name}, il tuo bligetto avrà un costo di ${ticket_price.toLocaleString("en-US", {style:"currency", currency:"EUR"})}.`);
    }
