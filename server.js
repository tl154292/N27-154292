//Programme verarbeiten oft Objekte der realen Welt.
//Objekte haben eigenschaften.
//In unserem Bankingprogramm interessieren uns Objekte,
// wie z.B. Kunde,Konto,Filliale,Bankautomat
//Alle Kunden unserer Bank haben die selben Eigenschaften,aber
//unterschiedliche Eigenshaftswerte


class Kunde{
    constructor(){
        this.IdKunde
        this.Nachname
        this.Vorname
        this.Kennwort
        this.Kontostand
        this.Geburtsdatum
        this.Mail

    }
}

//Von der Kunden-Klasse wird eine konkrete Instanz gebildet.

let kunde = new Kunde()

//Die konkrete Instanz bekommt Eigenschaftswerte zugewiesen.

kunde.IdKunde = 154292
kunde.Nachname = "lalomico"
kunde.Vorname = "Leonardo"
kunde.Geburtsdatum = "01.02.2001"
kunde.Kennwort = "223344"
kunde.Mail = "leonardo@web.de"

const express = require('express')
const bodyParser = require('body-parser')
const meineApp = express()
meineApp.set('view engine', 'ejs')
meineApp.use(express.static('public'))
meineApp.use(bodyParser.urlencoded({extended: true}))

const server = meineApp.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})


meineApp.get('/',(browserAnfrage, serverAntwort, next) => {              
    serverAntwort.render('index.ejs', {})          
})

meineApp.post('/login',(browserAnfrage, serverAntwort, next) => { 
    const idKunde = browserAnfrage.body.IdKunde  
    const kennwort = browserAnfrage.body.Kennwort  
    
    console.log("ID des Kunden: " + idKunde)
    console.log("Kennwort des Kunden: " + kennwort)

    if(idKunde == kunde.idKunde){
        serverAntwort.render('index.ejs', {})
    }

    serverAntwort.render('login.ejs', {})        
})

// Wenn die login-Seite im Browser aufgerufen wird, ...

meineApp.get('/login',(browserAnfrage, serverAntwort, next) => {              

    // ... dann wird die login.ejs vom Server gerendert an den
    // Browser zurückgegeben:

    serverAntwort.render('login.ejs', {})          
})

// Die app.post('login') wird ausgeführt, sobald der Button
// auf dem Login-Formular gedrückt wird.

meineApp.post('/login',(browserAnfrage, serverAntwort, next) => {              
    serverAntwort.render('index.ejs', {})          
})


