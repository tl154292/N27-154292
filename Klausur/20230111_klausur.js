console.log("Klausur")

//Der Ordner Klausuren und Übungen müssen zur Klausurbeginn leer sein, bis auf die Datei klausur_20230111

//Relevante Themen:
//Alles wie in der letzten Klausur aber kein Datenschutz und Datensicherheit
//If und else (auch verschachtelt) und zusätzlich und (&&) und oder (||)

//wenn ein schüler mehr als 20 oder höchstens 27 Punkten hat, bekommt sie/ er eine 3 in Wi.

let untergrenze = 20
let obergrenze = 27
let punktzahl = 25

if (punktzahl > untergrenze && punktzahl <= obergrenze){
    console.log("Die/Der Schüler hat eine 3 in WI.")
}else{
    console.log("Der/Die Schüler hat keine 3 in WI.")
}

//Wenn ein Kind kleiner als 1 Meter ist oder noch keine 7 Jahre alt ist, hat es freien Eintritt im Schwimmbad

let mindestalter = 7
let mindestgroesse = 1
let alter = 6
let groesse = 1.1

if(alter < mindestalter || groesse < mindestgroesse){
    console.log("Freier Eintritt")
}else{
    console.log("Kein freier Eintritt")
}


//Geben sie mit einer Schleife 6x untereinander den Ausruf "Hallo!" aus
// let i = 0 bedeutet, dass eine Variable namens i mit dem Wert = initalisiert wird.
// i < 6; bedeutet, dass die Schleife so oft durchlaufen wird, solange die Prüfung wahr ist.
// i++ bedeutet, dass i bei jedem Schleifen durchlauf um eins hochgezählt wird

for (let i = 0; i <= 6; i++) {

console.log((i+1) + ". Hallo!")
}

//Ein euro wird auf dem Sarbuch angelegt bei 10% Zinse. Woe hoch ist das Kapital nach 5 Jahren

let anfangsbetrag = 1
let zinssatz = 0.1
let kapitalwert = anfangsbetrag
let laufzeit = 2

for (let i = 0; i < 5; i++){
    kapitalwert = kapitalwert + kapitalwert * zinssatz
}

console.log("Kapitalwert nach " + laufzeit + " Jahren: " + kapitalwert)

//Zählen sie mit einer Schleife von 3 bis 1 herunter

for(let i = 3; i > 0; i--){
    console.log("Countdown: " + i)
}