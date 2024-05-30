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