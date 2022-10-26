// Klausur 
// Wenn eine Aufgabe nicht funktioniert, dann bitte auskommentieren: /*  */
console.log("Aufgabe 1")
// Bei der Landtagswahl ergeben sich vereinfacht folgende Prozentpunkte für die Parteien:

// Vergleichen Sie die Ergebnisse mit if/else.


// Geben Sie im Terminal in einem Antwortsatz an, welche Partei die Wahl gewonnen hat.
// Wenn die Werte sich ändern, muss ihr Antwortsatz sich automatisch anpassen.
// Hier Ihre Lösung:

console.log("Aufgabe 1")

let prozentpunkteSPD = 47
let prozentpunkteCDU = 53

if(prozentpunkteSPD < prozentpunkteCDU){
    console.log("Die CDU hat die Wahl gewonnen")
}else{
    console.log("Die SPD hat die Wahl gewonnen")
}



// Bei einem großen Unternehmen stehen 900.000 € Ausgaben Einnahmen von 1.000.000 € gegenüber.
// Prüfen Sie mit if/else, ob das Unternehmen Gewinn oder Verlust gemacht hat.
// Arbeiten Sie mit Variablen, die mit den genannten Werten initialisiert werden.
// Geben Sie Ihre Lösung im Terminal aus: 

console.log("Aufgabe 2")

let ausgaben = "900.000€"
let einahmen = "1.000.000€"

if(ausgaben-einahmen){
    console.log("Das Unternehmen macht Gewinn")
}else{
    console.log("Das Unternehmen macht Verluste")
}



console.log("Aufgabe 3")
// In einem Handytest sollen Handys miteinander verglichen werden.
// a) Erstellen Sie die Klassendefinition mit mindestens 4 relevanten Eigenschaften:

class Handy{
    constructor(){
        this.Preis
        this.Bildschirmgröße
        this.Kameraqualität
        this.Speicherplatz
    }
}
// b) Instanzieren Sie zwei Objekte ("Samsung" und "Apple") der von Ihnen erstellten Klasse:

let handySamsung = new Handy
let handyApple = new Handy
// c) Initialisieren Sie beide Objekte mit geeigneten Eigenschaftswerten:

handySamsung.Preis = 1000
handySamsung.Bildschirmgröße = "6x10cm"
handySamsung.Kameraqualität = "2000mpx"
handySamsung.Speicherplatz = "265Gb"

handyApple.Preis = 1500
handyApple.Bildschirmgröße = "7x10cm"
handyApple.Kameraqualität = "2000mpx"
handyApple.Speicherplatz ="128GB"

// d) Vergleichen Sie mit if/else eine der relevanten Eigenschaften und geben Sie
//    im Terminal aus, ob Samsung oder Apple besser ist im Hinblick auf diese Eigenschaft:

if(handySamsung.Speicherplatz > handyApple.Speicherplatz){
    console.log("Das Samsunghandy ist besser")
}else{
    console.log("Das Applehandy ist besser")
}

console.log("Aufgabe 4")
// Änderung Sie für Ihre ganze Banking-App das Farbschema, indem Sie 
// den grünen Bereich oben und den grünen Bereich unten 
// in eine andere, ansprechende Farbe ändern, 
// so dass die weiße Schrift weiterhin gut lesbar bleibt.
console.log("Aufgabe 5")
// In Ihrer Banking-App Banking-App soll der Kunde die Kosten für einen Kredit berechnen können.
// Die Formel für die monatliche Zinsbelastung lautet: 
// Zinsen pro Monat = (Kreditbetrag x Zinssatz) ÷ (100 x 12)
// Formulieren Sie auf Papier den "Issue" und dazu 10 sinnvolle Tasks



