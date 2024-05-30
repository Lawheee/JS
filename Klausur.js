/*Probeklausur Peter Schmidt

Aufgabe 1
Erzeugen Sie in JS ein Array arr mit 4 beliebigen Elementen vom Datentyp boolean.
Geben Sie anschließend das erste Element in die JS-Konsole aus. 
*/
let testArr = [true, false, false, true];

console.log(testArr[0]); 

/* let ist das Schlüsselwort um das Array zu initialisieren,
 danach wird der bezeichner festgelegt und nach dem zuweisungsoperator = in [] die Array Elemente zugewiesen
Danach Erfolgt die Anweisung, das erste Element (Position 0[0]) des Arrays in der Konsole auszugeben 
Das Erste Element eines Arrays hat ÜMMAHR den Index 0 
Datentyp boolean: Wahrheitswert true oder false*/

//---------------------------------------------------------------------

/*Aufgabe 2
Sie sehen folgende Struktur in Ihrem JS-Editor:

let obj =
{
    level1:
    {
     param1: 12,
     level2:
     {
         param2: 24
     }
    }
};

Geben Sie jeweils den Inhalt der properties param1 und param2 in die JS-Console aus.
*/

let obj =
{
    level1:
    {
        param1:12,
        level2:
        {
            param2:24
        }
    }
    
};
console.log(obj.level1.param1);
console.log(obj.level1.level2.param2);

/*Im Console.log befehl gehen wir die Ebenen des verschachtelten Objektes ab
und schreiben den Pfad in () um die Ausgabe zu ermöglichen*/

//-------------------------------------------------------------------

/*Aufgabe 3
Wie nennt man die in Aufgabe 2 verwendete Struktur? Im Zusammenhang mit der
Entwicklung von Webseiten mit HTML/JS ist Ihnen eine ähnliche Struktur bekannt -
wie nennt man diese (Abkürzung) ? Wann wird diese Struktur vom Browser angelegt?

Es handelt sich um ein nested Object
In HTML/JS nennt man dies Document Object Model (DOM)
Beim Parsen des HTML Dokumentes
(Das elektronische Aufbereiten einer Zeichenfolge wird als parsen (englisch für analysieren) bezeichnet.
Beispielsweise erstellt ein HTML-Parser die Dokumentenstruktur, das DOM, 
welches im Anschluss durch den Renderer visuell dargestellt wird.) */

//----------------------------------------------------------------------

/*Aufgabe 4
Legen Sie eine JS-Funktion rechner() an. Diese soll folgende Aufgaben erfüllen:
Bei Aufruf sollen der Funktion zwei Zahlen übergeben werden. In Abhängigkeit eines dritten
Parameters soll die Funktion entweder die Summe oder das Produkt der beiden Zahlen
berechnen und danach das Ergebnis als String in der Form ‘Das Ergebnis lautet: XX’
in die JS-Console ausgegeben. Verwenden Sie für die Funktionalität der Summen- bzw.
Produktbildung 2 Unterfunktionen summe() und produkt().
Geben Sie auch zwei Funktionscalls an!
 */

function rechner(zahl1, zahl2, operator){
    let ergebnis;

    if (operator === "summe") {
        ergebnis = summe(zahl1, zahl2);   
    }

    else if (operator === "produkt"){
        ergebnis = produkt (zahl1, zahl2);   
    }

    else {
        console.log("ungültige Eingabe!");
        return 
    }

    console.log("Das Ergebnis lautet: " + ergebnis);
}
    function summe (a, b){
        return a + b;
        }

    function produkt (a, b){
        return a * b;
        }
    
rechner(2,3, "summe");
rechner(2,3, "produkt");

/*Zuerst wird die funktion rechner angelegt und die Operatoren definiert
dabei legen wir mit der If-Funktion einmal den Operator Summe fest und dass zwei Parameter (Zahl1, Zahl2) übergeben werden sollen
Dann legen wir mit der else if-Funktion einen alternativen Pfad fest und definieren den Operator Summe auf gleiche weise
Hierbei handelt es sich um eine Verschachtelung, das bedeutet die Variablen sind nur innerhalb der Funktion definiert
Somit können wir die Variablen später mit a und b benennen
Wichtig: === vergleichen auch den Datentyp und übernehmen diesen 
Als Ausweichfunktion legen wir dann noch über die else-Funktion die Ausgabe "ungültige Eingabe!" fest, falls die übergebenen
Variablen nicht dem Datentyp entsprechen sollten
Zuletzt legen wir noch die Ausgabe des Ergebnisses innerhalb der Funktion fest 
Die Funktion endet hier.

Wir legen nun die Funktion fest indem wir dem Operator (summe oder produkt) zwei Variablen (a, b)*/

//-----------------------------------------------------------------------

/*Aufgabe 5
Sie sehen folgenden Stub-Code einer Java-Klasse:
public class Test extends SuperClass1, SuperClass2 { ….. }
Der Code kompiliert nicht. Warum?

Hier werden zwei Superklassen angelegt, es ist aber nur eine möglich (keine Mehrfachvererbung),
da Vererbung nur seriell möglich ist 
Eine Subklasse kann nur von einer Superklasse erben */

//-----------------------------------------------------------------------

/*Aufgabe 6
Aus einer Methode in einer Klasseninstanz geben Sie die Variable this aus.
Was beinhaltet diese Variable? In welcher anderen Variable finden Sie diesen Wert
ebenfalls? 

this beninhaltet die RAM adresse
Der Wert ist auch in der Instanzvariable zu finden 
WICHTIG: Instanzvariablen oder auch Klassenglobale Variablen sind variablen die in der ganzen Klasse zugänglich sind. 
Sie unterscheiden sich von Variablen die in Methoden definiert sind durch ihre Gültigkeit und Sichtbarkeit.

*/
//-----------------------------------------------------------------------
/*Aufgabe 7
 In einer Klasse ist eine Instanzvariable wie folgt deklariert: private String item;
Geben Sie zwei geeignete Methoden an, durch die der Inhalt der Variable von außerhalb
der Klasse gelesen bzw. geändert werden kann.*/

//!Der Code ist in Java geschrieben und kann hier nicht verwendet werden!

/* Getter-Methode: Diese Methode erlaubt das Lesen des Werts der Instanzvariablen

public String getItem(){ 

    return Item;
    
    }
    Setter-Methode: Diese Methode erlaubt das Ändern des Werts der Instanzvariablen.

    public void setItem(String newItem){ 
    
    this.Item = newItem;
    
    } */


//-----------------------------------------------------------------------
/*Aufgabe 8

- appStatus: boolean
+ inputField1: String
+ inputField2: String
# itemCount1: int
# itemCount2: int

Deklarieren Sie die in o.g. Klassendiagramm angegebenen Attribute - beachten Sie dabei
den Datentyp & die Sichtbarkeit der jeweiligen Instanzvariablen.

Private Instanzvariablen(private -)
private boolean appStatus;

Öffentliche Instanzvariablen(public +)
public String inputField1;
public String inputField2;

Geschützte Instanzvariablen (protected #)
protected int itemCount1;
protected int itemCount2;*/