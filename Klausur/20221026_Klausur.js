console.log("Mein Name: XXXX ")
console.log("******** K L A U S U R 26.10.2022 ********")

// Aufgabe 1
// Grenzen Sie Datenschutz und Datensicherheit gegeneinader ab!
// 
// Beim Datenschutz geht es darum, die Menschen und ihre Freiheiten bezüglich der Personenbezogegen
//Daten zu schützen. Es geht also nicht darum die Daten zu schützen, sonder viel mehr den Menschen
//Es ist eher ein rechtlich geregelter Ablauf
//Bei Datensicherheit geht es darum Personenbezogene Daten gesetzlich zu schützen,
// um damit sicher arbeiten zu können. Dabei geht es nur um die Daten ansich und wie mit diesen
//ein sicherer Umgang stattfinden kann
//
//
//
//
//
// 
// 
// 
// 
// 
// Aufgabe 2 a)
// Grenzen Sie symmetrische und asymmetrische Verschlüsselung gegeneinander ab! 
// Nennen Sie jeweils Vorteile! 
// Gehen Sie auch auf die Eigenschaften und Unterschiede von public key und private key ein!
// 
//
//Bei der symmetrischen Verschlüsselung gibt es einen Code zum codieren wie zum decodieren, es ist also
//der selbe Schlüssen als Beispiel dafür ist da das Handy
//Die symmetrische Verschlüsselung geht sehr viel schneller als die asymmetrische
//Bei der asymmetrischen Verschlüsselung gibt es ein Schlüssel zum codoeren und einen anderen Schlüssel 
//zum decodieren. Der Schlüssel muss dann sicher der anderen Person übermittelt werden , wie z.B. am Telefon
//Die asymmetrische Verschlüsselung ist sicherer als die symmetrische Verschlüsselung
//
// Der Public key ist der schlüssel, mit dem man codiert und mit dem man Verschlüsselt, wohingegen der private key
// der Schlüsseln zum entschlüsselt, diesen sollte man keines falls herausgeben und privat halten und 
// dieser wird  nur nter bestimmten Vorraussetzungen hervorgegeben
// 
// Aufgabe 2 b)
// Wie könnte eine Verschlüsselung aussehen, die die Vorteile symmetrischer und asymmetrischer
// Verschlüsselung miteinander verbindet?
// 
// 
// Man könnte etwas symmetrisch mit einem Passwort verschlüsseln und 
//dass Passwort dann asymmetrisch verschlüsseln
// 
// Botkrypt 
//hybride Verschlüsselung von asymmetrischer und symmetrischer Verschlüsselung
//
//
//
//
// Aufgabe 3)
// Grenzen Sie Deklaration, Instanziierung und Initialisierung voeinander ab!  
// 
//
//Deklaration: 
//
//  
// Instanziierung:
//
//
//Initialisierung: Ich vergebe wichtige Eigenschaften an die Werte
//
//
//
// Aufgabe 5a)
// Sie werden beauftragt ein Programm zu entwicklen, dass alle Zeugnisse einer Schule digital verwaltet.  
// Entwerfen Sie eine Klasse mit relevanten Eigenschaften!

console.log("Aufgabe 5:")

class Zeugnis{
    constructor(){
        this.Name
        this.Klasse
        this.Faecher
        this.Notengesamt
        this.Fehlstunden
    }
}






// Aufgabe 5b)
// Führen Sie Deklaration, Instanzzierung und Initialisierung für das Halbjahreszeugnis 
// des Schüler Pit Kiff durch. 
// Vergeben Sie realistische Eigenschaftswerte.  
//
//l
//
//
//

let zeugnisPit = new Zeugnis
let zeugnisGit = new Zeugnis

zeugnisPit.Name = "Pit Kiff"
zeugnisPit.Klasse = "10b"
zeugnisPit.Notengesamt = "1,8"
zeugnisPit.Faecher = 10
zeugnisPit.Fehlstunden = 15



// Aufgabe 5c)
// Geben Sie die Eigenschaftswerte aus 5b auf der Konsole wie folgt aus: Je Eigenschaft soll
// in jeweils einer Zeile die Eigenschaft und der zugehörige Wert angezeigt werden.
// Beispiel für:
// Schuhgröße: 40
// Haarfarbe: braun 


console.log("Pit hat " + zeugnisPit.Fehlstunden + " Fehlstunden")


console.log("Pit hat ein " + zeugnisPit.Notengesamt + " Notendurchschnitt")





// Aufgabe 6)
// Zwei Schüler haben bekommen Zeugnisse: 
// Pit: Punkte (Mathe: 15, Deutsch: 10, Englisch:  5) 
// Git: Punkte (Mathe: 10, Deutsch:  8, Englisch: 15) 
//p



 console.log ("Aufgabe 6")

 let pitDurchschnitt = 15
 let gitDurchschnitt = 16.5



 if(pitDurchschnitt < gitDurchschnitt){
    console.log("Pit hat das bessere Zeugniss")
 }else{
    console.log("Git hat das bessere Zeugniss")
 }
// Initialisieren Sie Variablen für alle genannten Eigenschaftswerte. 
// Programmieren Sie folgende Logik:
// * Wenn die Durchschnittspunktzahl von Pit größer ist, soll auf der Konsole stehen: 
//     "Pit hat das bessere Zeugnis" 





// * Wenn die Durchschnittspunktzahl von Git größer ist, soll auf der Konsole stehen: 
//     "Git hat das bessere Zeugnis"

// Wenn die Durchschnittspunktzahl gleich ist, dann soll auf der Konsole stehen: 
//     "Pit gleich Git" 


if(pitDurchschnitt == gitDurchschnitt){
    console.log("Pit gleich Git")
 }else{
    console.log("Git gleich Pit")


// Wenn die Durchschnittspunktzahl bei einem doppelt so groß oder größer ist, dann soll auf der Konsole stehen: 
//     "Git hat das viel bessere Zeugnis" bzw.
//     "Pit hat das viel bessere Zeugnis"


if(pitDurchschnitt < gitDurchschnitt){
    console.log("Pit hat das viel bessere Zeugniss")
 }else{
    console.log("Git hat das viel bessere Zeugniss")