// Programme verarbeiten oft Objekte der realen Welt. Objekte haben 
// Eigenschaften. In unserem Bankingprogramm interessieren uns Objekte,
// wie z.B. Kunde, Konto, Filiale, Bankautomat, ...
// Alle Kunden unserer Bank haben dieselben Eigenschaften, aber
// unterschiedliche Eigenschaftswerte.

class Kunde{
    constructor(){
        this.IdKunde
        this.Nachname
        this.Vorname
        this.Kennwort
        this.Kontostand
        this.Geburtsdatum
        this.Mail
        this.Rufnummer
    }
}
let kunde = new Kunde()

kunde.IdKunde = 154292
kunde.Nachname = "Teme"
kunde.Vorname = "Lena"
kunde.Geburtsdatum = "23.10.2000"
kunde.Mail = "lena.teme@web.de"
kunde.Kennwort = "223344"
kunde.Rufnummer = "01523867524"

class Kundenberater{
    constructor(){
        this.IdKundenberater
        this.Nachname
        this.Vorname
        this.Kennwort
        this.Kontostand
        this.Geburtsdatum
        this.Mail
        this.Rufnummer
        this.Begruessung
}

}
// Von der Kunden-Klasse wird eine konkrete Instanz gebildet. 

let kundenberater = new Kundenberater()

// Die konkrete Instanz bekommt Eigenschaftswerte zugewiesen.

kundenberater.IdKunde = 1534343
kundenberater.Nachname = "Klöpi"
kundenberater.Vorname = "Hannah"
kundenberater.Geburtsdatum = "23.10.2000"
kundenberater.Mail = "hannah.klöpi@web.de"
kundenberater.Kennwort = "223344"
kundenberater.Rufnummer = "01523867524"
kundenberater.Begruessung = "Hallo, ich bin dein Kundenberater"
kundenberater.Position = "Master of desaster"

class Konto{
    constructor(){
        
        this.Kontostand
        this.IBAN
        this.Kontoart
        this.Pin
    }
}
//Instanzzierung eines Objekts namens koto vom typ konto
//"let konto" bedeutet, dass ein Objekt namens Konto existieren soll.MAn sagt,
// das kontonwird deklariert.

//"=new Konto()" nennt man Die Inastziierung. Bei der Instaziierung wird Festplatten-
// speicher reserviert, um bei der anschließendnen Initiarisierung konkrete Eigen-
//schaftswerte für das Objekt zu speichern

let konto = new Konto()

//Die Klasse KOnto ist der Bauplan für alle konto-objekte
//In der Klasse werden alle relevanten Eigenschaften definiert
//Die konto-Objekte, die aus dieser Klasse erzeugt werden, haben die selben
//Eigenschaten, aber unterschiedliche Eigenschaften

konto.Kontostand = 1000
konto.IBAN ="DE614238463"
konto.Kontoart = "Sparbuch"
konto.Pin = 234


class Kredit{
    constructor(){
        this.Zinssatz
        this.Laufzeit
        this.Betrag
    }

    //eine Funktion berechnet etwas. Im Namen der Funktion steht also immer ein Verb.
    
    berechneGesamtkostenKreditNachEinemJahr(){
        return this.Betrag * this.Zinssatz / 100 + this.Betrag
    }
}
    






const express = require('express')
const bodyParser = require('body-parser')
const meineApp = express()
const cookieParser = require('cookie-parser')
const { TIS620_BIN } = require('mysql/lib/protocol/constants/charsets')
meineApp.set('view engine', 'ejs')
meineApp.use(express.static('public'))
meineApp.use(bodyParser.urlencoded({extended: true}))
meineApp.use(cookieParser('geheim'))

const server = meineApp.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

// Die Methode meineApp.get('/' ...) wird abgearbeitet, sobald
// der Kunde die Indexseite (localhost:3000 bzw. n27.herokuapp.com) ansurft.

meineApp.get('/',(browserAnfrage, serverAntwort, next) => {              
    
    // Wenn ein signierter Cookie mit Namen 'istAngemeldetAls' im Browser vorhanden ist,
    // dann ist die Prüfung wahr und die Anweisungen im Rumpf der if-Kontrollstruktur 
    // werden abgearbeitet.

    if(browserAnfrage.signedCookies['istAngemeldetAls']){
        
        // Die Index-Seite wird an den Browser gegeben:

        serverAntwort.render('index.ejs',{})
    }else{

        // Wenn der Kunde noch nicht eigeloggt ist, soll
        // die Loginseite an den Browser zurückgegeben werden.
        serverAntwort.render('login.ejs', {
            meldung : ""
        })
    }                 
})

// Die Methode meineApp.post('/login' ...) wird abgearbeitet, sobald
// der Anwender im Login-Formular auf "Einloggen" klickt.

meineApp.post('/login',(browserAnfrage, serverAntwort, next) => {              
    
    // Die im Browser eingegebene IdKunde und Kennwort werden zugewiesen
    // an die Konstanten namens idKunde und kennwort.

    const idKunde = browserAnfrage.body.IdKunde
    const kennwort = browserAnfrage.body.Kennwort
    
    console.log("ID des Kunden: " + idKunde)
    console.log("Kennwort des Kunden: " + kennwort)

    // Die Identität des Kunden wird überprüft.
    
    if(idKunde == kunde.IdKunde && kennwort == kunde.Kennwort){
    
        // Ein Cookie namens 'istAngemeldetAls' wird beim Browser gesetzt.
        // Der Wert des Cookies ist das in eine Zeichenkette umgewandelte Kunden-Objekt.
        // Der Cookie wird signiert, also gegen Manpulationen geschützt.

        serverAntwort.cookie('istAngemeldetAls',JSON.stringify(kunde),{signed:true})
        console.log("Der Cookie wurde erfolgreich gesetzt.")

        // Wenn die Id des Kunden mit der Eingabe im Browser übereinstimmt
        // UND ("&&") das Kennwort ebenfalls übereinstimmt,
        // dann gibt der Server die gerenderte Index-Seite zurück.
        
        serverAntwort.render('index.ejs', {})
    }else{

        // Wenn entweder die eingegebene Id oder das Kennwort oder beides
        // nicht übereinstimmt, wird der Login verweigert. Es wird dann die
        // gerenderte Login-Seite an den Browser zurückgegeben.

        serverAntwort.render('login.ejs', {
            meldung : "Ihre Zugangsdaten scheinen nicht zu stimmen."
        })
    }
})


// Wenn die login-Seite im Browser aufgerufen wird, ...

meineApp.get('/login',(browserAnfrage, serverAntwort, next) => {              

    // ... dann wird die login.ejs vom Server gerendert an den
    // Browser zurückgegeben:

    // Der Cookie wird gelöscht.

    serverAntwort.clearCookie('istAngemeldetAls')

    serverAntwort.render('login.ejs', {
        Meldung: "Bitte geben Sie die Zugangsdaten ein."
    })          
})

// Wenn die about-Seite angesurft wird, wird die about-seite zum Browser zurückgegeben


meineApp.get('/about',(browserAnfrage, serverAntwort, next) => {              

    if(browserAnfrage.signedCookies['istAngemeldetAls']){
        
        // Die Index-Seite wird an den Browser gegeben:

        serverAntwort.render('about.ejs',{})
    }else{

        // Wenn der Kunde noch nicht eigeloggt ist, soll
        // die Loginseite an den Browser zurückgegeben werden.
        serverAntwort.render('login.ejs', {
            meldung : ""
        })
    } 
           
})

meineApp.get('/profil',(browserAnfrage, serverAntwort, next) => {              

    serverAntwort.render('profil.ejs', {
        Vorname: kunde.Vorname,
        Nachname: kunde.Nachname,
        Mail: kunde.Mail,
        Rufnummer: kunde.Rufnummer,
        Kennwort: kunde.Kennwort,
        Erfolgsmeldung: ""
    })          
})

meineApp.get('/support',(browserAnfrage, serverAntwort, next) => {              

    serverAntwort.render('support.ejs', {
        Vorname: kundenberater.Vorname,
        Nachname: kundenberater.Nachname,
        Mail: kundenberater.Mail,
        Rufnummer: kundenberater.Rufnummer,
        Kennwort: kundenberater.Kennwort,
        Begruessung: kundenberater.Begruessung,
        Position: kundenberater.Position
      
    })          
})


// Sobald der Speichern-Button auf der Profil-Seite gedrückt wird,
// wird die meineApp.post('profil'...) abgearbeitet.

meineApp.post('/profil',(browserAnfrage, serverAntwort, next) => {     
    
    //Die Erfolgsmeldung für das Speichern der geänderten Profildaten wird
    // in eine lokale Variable namens Erfolgsmeldung gespeichert
    

let erfolgsmeldung = ""

    // Der Wert der Eigenschaft von Mail im Browser wird
    // zugewiesen (=) an die Eigenschaft Mail des Objekts kunde

if(kunde.Mail != browserAnfrage.body.Mail){
    
    //Wenn der Wert der Eigenschaft von kunde.Mail abweicht
    //vom wert der Eigenschaft mail aus dem Browser-Formular
    //dann wird die Erfolgsmeldung initialisiert:

    erfolgsmeldung = erfolgsmeldung + "Änderung der Mail erfolgreich. "
    kunde.Mail = browserAnfrage.body.Mail
    console.log(erfolgsmeldung)
}

if(kunde.Kennwort != browserAnfrage.body.Kennwort){
    
    //Wenn der Wert der Eigenschaft von kunde.Mail abweicht
    //vom wert der Eigenschaft mail aus dem Browser-Formular
    //dann wird die Erfolgsmeldung initialisiert:

    erfolgsmeldung = erfolgsmeldung + "Änderung des Kennworts erfolgreich. "
    kunde.Kennwort = browserAnfrage.body.Kennwort
    console.log(erfolgsmeldung)
}    

if(kunde.Rufnummer != browserAnfrage.body.Rufnummer){
    
    //Wenn der Wert der Eigenschaft von kunde.Mail abweicht
    //vom wert der Eigenschaft mail aus dem Browser-Formular
    //dann wird die Erfolgsmeldung initialisiert:

    erfolgsmeldung = erfolgsmeldung + "Änderung der Rufnummer erfolgreich. "
    kunde.Rufnummer = browserAnfrage.body.Rufnummer
    console.log(erfolgsmeldung)
}
    
    
    console.log("Profil gespeichert.")
    
    serverAntwort.render('profil.ejs', {
        Vorname: kunde.Vorname,
        Nachname: kunde.Nachname,
        Mail: kunde.Mail,
        Rufnummer: kunde.Rufnummer,
        Kennwort: kunde.Kennwort,
        Erfolgsmeldung: erfolgsmeldung
    })
})

// sobald der Button "Kontostand anzeigen" auf der IdnexSeite gedrückt wird,
// wird meine App.get ('/KontostandAnzeigen'-Funktion abgearbeitet)

meineApp.get('/kontostandAnzeigen',(browserAnfrage, serverAntwort, next) => {              

    if(browserAnfrage.signedCookies['istAngemeldetAls']){
        
        // Die Index-Seite wird an den Browser gegeben:

        serverAntwort.render('kontostandAnzeigen.ejs',{
            Kontostand: konto.Kontostand,
            IBAN: konto.IBAN,
            Kontoart: konto.Kontoart,
            Erfolgsmeldung: ""
        })
    }else{

        // Wenn der Kunde noch nicht eigeloggt ist, soll
        // die Loginseite an den Browser zurückgegeben werden.
        serverAntwort.render('login.ejs', {
            meldung : ""
        })
    } 
           
})

meineApp.get('/kreditRechnen',(browserAnfrage, serverAntwort, next) => {              

    if(browserAnfrage.signedCookies['istAngemeldetAls']){
        
        // Die Index-Seite wird an den Browser gegeben:

        serverAntwort.render('kreditRechnen.ejs',{})
    }else{

        // Wenn der Kunde noch nicht eigeloggt ist, soll
        // die Loginseite an den Browser zurückgegeben werden.
        serverAntwort.render('login.ejs', {
            meldung : ""
        })
    } 
           
})
require('./Uebungen/ifUndElse.js')
//require('./Uebungen/klasseUndObjekt.js')
require('./Klausur/20221026_Klausur.js')


