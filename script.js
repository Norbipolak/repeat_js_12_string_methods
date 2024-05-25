/*
A string-eknek is van length-je, ami megmondja, hogy milyen hosszú, hány karakterből áll 
vannak index-ei is ami 0-tól indul és length-1 a vége, az utolsó karakter 
*/ 

const string = "Ez egy string";
console.log(string[3]); //e
console.log(string[2]); // ez meg semmi, mert ott nincs betű, de ez is egy karakter a karakterláncban és van indexe is!! 

for(letter of string) {
    console.log(letter); //E alatta z alatta semmi alatta e alatta g és így tovább 
}

for(let i = 0; i < string.length; i++) {
    console.log(string[i]);
}

const string2 = "abcd";
for(let i = 0; i < string.length;i++) {
    for(let j = 0; j < string2.length; j++) {
        console.log(string[i], string2[j]);
    }
}
/*
E a
E b
E c
E d
z a
z b
z c
*/ 

let counter = 0;

for(i = 0; i < string.length; i++) {
    for(let j = 0; j < string2.length; j++) {
        if(string[i] === string2[j]) {
            counter++;
            break; //// mert ez a következő karakterre megy ha talál egy match-et 
        }
    }
}

console.log(counter); //0 mert nincs bennük közös karakter 

/*
let string1 = "example"; // Example string 1
let string2 = "elpmaxe"; // Example string 2

function haveSameCharacters(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}

console.log(haveSameCharacters(string1, string2)); // Output: true

ha meg azt akarjuk megvizsgálni, hogy ugyanazok karakterei!! 
************************************************************************************************************************************************/

//charAt 
/*
Megmondja, hogy az adott indexű karakteren milyen karakter található  
*/
const string3 = "Code explained";
console.log(string3.charAt(2)); //d
console.log(string3.charAt(0)); //C

//ez ugyanaz, mintha így csinálánk 
console.log(string3[2]); //d 

/********************************************************************************************************************************************/

//indexOf() -> megtalálja az első egyezőséget 
//LastIndexOf() -> megtalálja az utolső egyezőséget 
const string4 = "Ez zsdfdfs ed";

const indexed = string4.indexOf("e"); 
console.log(indexed); //11 azért, mert az E nem veszi bele, mert az egy nagy E, mi meg a kis e indexét kerestük 

const lastIndexed = string4.lastIndexOf("e");
console.log(lastIndexed); //11 ez is 11, mert csak egy e volt benne és a 11 index-en tehát ez az első meg az utolsó is 

//de itt nem csak egy betűre, hanem karakterláncokra is 
const s = "The code undefined code code";

const index1 = s.indexOf("Code");
console.log(index1); //-1 mert ez nem volt benne!!!! 

const index2 = s.indexOf("code"); 
console.log(index2); // 4 mert a negyedik index-en kezdődik ez a karakterlánc 

const index3 = s.lastIndexOf("code");  
console.log(index3); // 24 mert az utolsó egyezés a 24 index-től indul 

/*
van egy második paramétere, ami azt mondja meg, hogy honnan induljon, hányadik index-től 
pl. az index2-nek az első match-e a code-nak a 4-től indul és ha mi azt hastározzuk meg, hogy a 4 indextől indulunk akkor minden rendben, mert 
innen kezdődik az is de viszont ha az 5-től indulunk akkor keres egy másik egyezőséget és annak az első index-ét adja meg 
-> 
*/
const index4 = s.indexOf("code", 5);
console.log(index4); //19 mert a második code a 19 index-ről indul

const index5 = s.indexOf("code", 4);
console.log(index5); //4 mert pont innen kezdődik az első egyezés a code-ra és akkor az benne lesz 

/*
ez a második paraméter a lastIndexOf esetében pedig azt fogja megmondani, nem, hogy melyik index-ről indulunk ha nem, hogy meddig megyünk 
és akkor ha az utolsó megtaláltnak az első index-e nincs benne, akkor megyünk visszafele és megkeressük az utolsóelőttiét 
*/ 

const index6 = s.lastIndexOf("code", 24);
console.log(index6); 
/*
24 mert pont innen kezdődik az utolsó egyezés, tehát a 24 index karakter az s karakterláncban az a c, ami pont az utolsó egyezésnek az első 
karaktere, tehát ez még pont benne lesz, de ha 23 írnánk, akkor már nem!!! 
*/
const index7 = s.lastIndexOf("code", 23);
console.log(index7); // 19 mert ez az utolsóelőtti egyezésnek az első karaktere

/*
ha a position-ra negatív számot adunk meg, akkor úgy fog viselkedni, mintha az nulla lenne 
tehát ilyenkor az indexOf az nullától kezdődik, úgy mint alapesetben ha nem adnánk meg position-t 

lastIndexOf-nál viszont ez a position azt mondja meg, hogy meddig mehet, ezért itt ha bármilyen minusz van az nulla és ha nulláig mehet, akkor 
amit visszaad az biztos -1 lesz, mert nem fog találni egyezőséget 
*/

const index8 = s.indexOf("code", -5);
console.log(index8); //4 

const index9 = s.lastIndexOf("code", -5);
console.log(index9); //-1 

// ha ilyen formában nem adunk meg semmit, akkor mindig az indexOf az nulla lesz, a lastIndexOf meg mindig a length, tehát az utolsó index utáni
const index10 = s.indexOf("");
console.log(index10);//0

const index11 = s.lastIndexOf("");
console.log(index11);//28

/********************************************************************************************************************************************/ 
/*
Mindkettő kivesz egy részt az eredeti string-ből és visszaadja egy újban (új string lesz belőle) és az eredeti string nem fog változni!!!

Mindegyiknek az első paramétere az, hogy honnan kezdje, melyik index-ről 

const s2 = "The morning is upon us";  s2.length -> 23
így mennek az index-ek nomrálisan
0 1 2 3 4 5 ...22
így mennek visszafele
-23 -22 -21 -20 ...-1 
*/
const s2 = "The morning is upon us";

const spliced = s2.slice(12);
console.log(spliced); //is upon us ez lesz a új string az eredeti változatlan marad

/*
Ezt, hogy kiveszünk egy részt egy string-ből az lehet a slice-val, nem összekeverendő a splice()-val, ami egy tömb metódus 
ezt még lehet a subtring és a substr-vel ezek teljesen ugyanazt csinálják

fontos, hogy az első paraméter, ahonnan kezdünk az mindig benne van és ameddig megyünk az az index az már nem lesz benne 

Különbség a substring és a slice között, hogy ott nincsenek negatív indexek!!! 

Ha nem adunk meg, hogy meddig menjen, tehát csak egy paaramétert adunk meg akkor attól megy a végéig, mint itt az első példában

Meg nem összekeverndő a split-vel, ami egy string-ből csinál tömböt, amit majd vissza lehet alakítani a join-van 
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/ 
let str = "hello";
let array = str.split(''); // Convert string to array of characters

// Splice operation on the array
array.splice(1, 2, 'E', 'X'); // Replace 2 characters starting from index 1 with 'E' and 'X'

let newStr = array.join(''); // Convert array back to string

console.log(newStr); // Output: "hEXlo"
/**************************************************************************************************************************************/
/*
Vissza a slice-ra meg a substring-re!!! 
*/

const backwards = s2.slice(-11);
console.log(backwards); //is upon us ez olyan, mintha 12 írtunk volna csak most visszafele ment és innen is a végéig megy 
//tehát itt mindig fordítva lesz a nagyobb szám lesz az első paraméter s2.slice(-11, -7) ez egyenlő a s2.slice(12, 16)-val!!!! 

//viszont ha bármilyen negatív számot adunk meg a substring esetében, akkor úgy fogja fel mintha 0 lenne 
const substringed = s2.substring(-12);
console.log(substringed); //The morning is upon us

//ha megadunk egy olyat, amilyen indexű nincsen pl. itt 22 indexig van
const sliced1 = s2.slice(23); 
console.log(sliced1); //visszakapunk egy üres stringet 

const substringed2 = s2.substring(23);
console.log(substringed2); //itt is visszakapunk egy üres stringet 

//most megadunk egy második paramétert, hogy meddig menjen
const sliced2 = s2.slice(13, 16);
console.log(sliced2); // s u -> fontos, hogy ez 3 karakter lesz a 13, 14, 15 indexen állók 

const substringed3 = s2.substring(13, 16);
console.log(substringed3); // s u -> ugyanaz, mint a slice-nál 

/*
Mi van ha megcseréljük és a 16 van első paraméterként és a 13 médodikként, akkor a slice visszaad egy üres string-et, de 
a substring megcseréli és ugyanugy mint az elöbb 13-tól fog menni 16-ig 
*/

const sliced3 = s2.slice(16, 13);
console.log(sliced3); //egy "" empty string 

const substringed4 = s2.substring(16, 13);
console.log(substringed4); // s u, mert megcseréli és mintha azt írnánk be, hogy substring(13, 16); 

//ha negatív értékeket írunk be fordítva, itt volt, hogy a substring nem tudja értelmezni és ha egy volt megadva akkor automatik 0-tól kezdett 
const slicedMinusBack = s2.slice(-7, -3);
console.log(slicedMinusBack); //viszzafele megy és a -3-dik nem lesz benne a minusz 7 igen, tehát visszafele is mindig az 1 paraméter benne van 2 nem

const substringedMinus = s2.substring(-7, -3);
console.log(substringedMinus); // egy üres string-et add vissza "", mert olyanmintha 0-tól kezdene és 0-ig is menne 

/*
Fontos, hogy slice, ha minusz értéket adunk, akkor csak úgy müködik, hogy az első értéke az nagyobb minuszban mint a második -> (-7, -3);
mert ha ez fel lenne cserélve, akkor egy üres string-et kapnánk
*/

const slicedMinus = s2.slice(-4, -8);
console.log(slicedMinus); //empty string, mert a slice, csak úgy müködik, hogyha az első értéke minuszban nagyobb, mint a második 

//ez is egy üres string 
const slicedNegativeToPositive = s2.slice(-8, 4);
console.log(slicedNegativeToPositive);
//de ez müködik a substring-nél, mert úgy veszi, hogy az első -8 az 0 és akkor megyünk 4-ig, ami már nem lesz benne

const substringedNegativeToPositive = s2.substring(-8, 4);
console.log(substringedNegativeToPositive); //The

/*
Mi van, ha úgy megyünk, hogy pozítiv számtól egy negatívig 
*/

const slicedPositiveToNegative = s2.slice(8, -4);
console.log(slicedPositiveToNegative);//ing is upo, mert a -4 az hátrébb van, mint a 8 (-4 = 19) és akkor 8-tól megy 19-ig, ami már nincs benne 

/*
ugyanez a substring-nél -4-es azt ugye nullának fogja tekinteni és mivel a 0 kisebb, mint a 8, ezért meg fogja őket cserélni -
és ez lesz 0-8 (0-tól megy 8-ig, ahol a 8 már nem lesz benne)
*/

const substringedPositiveToNegative = s2.substring(8, -4);
console.log(substringedPositiveToNegative); //The morn

/*
Fontos különbségek 
slice tudja értelmezni a negatív értékeket és akkor visszafele megy, hogyha mindkettő értéke negatív (fontos, hogy az első nagyobb - legyen, 
mint a második)
ha csak az egyik minusz, akkor fontos, hogyha az első minusz akkor a második az késöbb legyen(nagyobb legyen)
pl. -8(ami megegyezik a 15)-vel az nem fog müködni, hogyha a második paraméter kisebb ennél, de ha nagyobb pl. 18 akkor igen 
fordítva ha a második minusz, mint itt a példában is akkor fontos, hogy az hátrább legyen, mint az első pozítiv szám 
8 az első szám és -4(ami megfelel 15-nek) az müködni fog de ha az első 8 és a második -17(ami megegyezik 6-val) akkor nem 
!!!!!!! 

ha úgy adunk meg számokat, hogy az első nagyobb, mint a második akkor a slice nem müködik, de a substring ezt érékeli és automatikusan 
kicseréli őket 
-> 
const sliced3 = s2.slice(16, 13); -> nem lesz jó, egy üres string
const substringed4 = s2.substring(16, 13); -> érzékeli, hogy a 16 nagyobb, mint a 13 és felcseréli őket 13-tól 16-ig fog menni

ha két minusz van, akkor fontos, hogy a slice-nál az első paraméter minusza nagyobb legyen 
const slicedMinusBack = s2.slice(-7, -3); -> ha ez fordítva lenne, akkor egy üres string 
a substring ezt úgy érzékeli, mintha 0-tól 0-ig -> üres string

substring-nél, ha az első karakter minusz vagy a második, akkor az mindenképp müködni fog, mert a minuszt 0-vá váltja 
és ha negyobb az első paraméter akkor felcseréli, ha meg nem nagyobb, akkor nullától megy addig, ami a másodikban van 
const substringedNegativeToPositive = s2.substring(-8, 4) The -> 0-tól megy 4-ig 
const substringedPositiveToNegative = s2.substring(8, -4); The morn -> 0-tól megy 8-ig 

ugyanez a substring-nél, fontos, hogyha átváltjuk a minuszt(pl. -20 = 3-val), akkor az ha az első paraméteren van a minusz akkor kisebbnek 
kell, hogy legyen, mint a második paraméteren és fordítva, ha második paraméteren van a minusz, akkor meg nagyobbnak 
fontos, hogy ez átváltva plusz-ra!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*********************************************************************************************************************************************
*/
/*
split() 
Arra jó, hogy a string-ünket substring-ekre akarjuk feldarabolni egy bizonyos elválasztó (seperator) mentén 
A split ezeket a substring-eket egy tömbbe fogja tenni!!!!!!! 
de az eredeti string az nem fog változni 
*/

const splitString = "The morning is upon us.";

//ha nem adunk meg elválasztás, akkor nem fog split bekövetkezni, ilyenkor vissza foja adni az egész stringet egy tömbben 
const arr0 = splitString.split();
console.log(arr0); //['The morning is upon us.']
console.log(arr0[0]); //'The morning is upon us.'

//ha megadunk egy első paramétert egy seperator-t (" "), itt megadtunk egy space elválasztónak és akkor minden space-nél el fogja választani
const arr1 = splitString.split("");
console.log(arr1); //['T', 'h', 'e', ' ', 'm', 'o', 'r', 'n', 'i', 'n', 'g', ' ', 'i', 's', ' ', 'u', 'p', 'o', 'n', ' ', 'u', 's', '.']
//így minden karakternél el fogja választani ha egy üres string-et adunk meg 

//de ha space-t adjuk meg 
const arr2 = splitString.split(" ");
console.log(arr2); //['The', 'morning', 'is', 'upon', 'us.'] akkor meg a space-knél fogja, seperator a space itt már nem lesz benne!!! 
//úgy mintha "string:string" -> .split(":"); akkor se lesz benne : ['string','string']

const arr3 = splitString.split("o");
console.log(arr3); //['The m', 'rning is up', 'n us.'] fontos, hogy az o, már nem lesz benne!!!! 

/*
Meg tudunk adni egy második paramétert is, ami a limit lesz egy szám és akkor csak annyi split lesz benne, mondjuk ha az előző példát 
vesszük, ahol "o" mentén választottuk el string-et és mivel két o volt, ezért 3 substring keletkezett ['The m', 'rning is up', 'n us.']

de ezt egy limit-vel be lehet állítani, hogy mennyi legyen -> string.split(separator, limit)
*/
const arr4 = splitString.split("o", 2);
console.log(arr4); //['The m', 'rning is up'] és ilyenkor csak kettő substring-et kapunk vissza és ez nem lesz benne 'n us.'

//ha pedig a limit 0, akkor visszaad egy üres tömböt
const arr5 = splitString.split("o", 0);
console.log(arr5); // []

/*******************************************************************************************************************************************/ 

//includes() 

/*
megmondja, hogy egy string az benne van egy string-ben, tehát az eredeti string-en meghívjuk az includes()-ot és megmondja, hogy benne van-e 
vagy nincs, amit ott megadtunk 

string.includes(searchString)

ez egy boolean fog visszaadni true vagy false lehet csak
*/

const sentence = "The quick brown fox jumps over the crazy dog.";
const included = sentence.includes("fox");
console.log(included); //true, mert a "fox" string az benne van az eredeti stringünkben!!!

//de ha nagy betűs "Fox", akkor nem lesz benne, mert az includes keySensitive
const includedCapitalLetters = sentence.includes("Fox");
console.log(includedCapitalLetters); //false

const included2 = sentence.includes("");
console.log(included2); //true 

const included3 = sentence.includes(" ");
console.log(included3); //true, mert van benne space is meg ugyanígy . is lenne benne 

/*
includes()-nak van egy második paramétere, ami azt mondja meg, hogy hányadik poziciótol (index) induljon a keresés 
string.includes(searchString, position)
*/

const included4 = sentence.includes("fox", 0);
console.log(included4); //true ,mert a nulladik indextől kezdtük a keresést és benne van a "fox"

//az f az eredeti string-ben a 16 index-en van ott kezdődik a fox és akkor is true lesz 
const included5 = sentence.includes("fox", 16);
console.log(included5);//true mert pont onnan kezdődik a fox és akkor még true lesz 

//de ha mondjuk a 17-től kezdünk, ahol az o van, akkor már false lesz!!! 
const included6 = sentence.includes("fox", 17);
console.log(included6); //false
/*************************************************************************************************************************************/

//startsWith() 

/*
Meg tudjuk, nézni, hogy a string azzal kezdődik amilyen searchString-et megadunk a startsWith()-nek
string.startsWith(searchString)

Ez is egy boolean értéket ad majd vissza, vagy true vagy false lesz 
*/

const str1 = "Cats are the best!";

const result = str1.startsWith("Cats");
console.log(result); //true keySensitive, szóval az, hogy "cats" kis betűvel az már false lenne 

const result2 = str1.startsWith("are");
console.log(result2); //false, mert nem azzal kezdődik 

/*
Ez is fel tud venni egy második paramétert, ami a position lesz, az egy index lesz és akkor onnan fogja nézni nem az elejétől a 0 index-től

string.startsWith(searchString, position)
*/

//az eredeti stringünkben az are az 5-dik indextől kezdődik, szóval ha a position-nek megadjuk az 5-öt, akkor már true lesz az "are"
const result3 = str1.startsWith("are", 5);
console.log(result3); //true

/*
endWith() azt vizsgálja meg, hogy az eredeti string az a searchString-vel végződik-e 

ugyanaz a str1 és megnézzük, hogy azzel végződik-e, hogy best! 
*/

const endResult = str1.endsWith("best!");
console.log(endResult); //true

const endResult2 = str1.endsWith("best");
console.log(endResult2); //false mert nincsen ! és a string azzal véződik 

/*
Ez is fel tud venni egy második paramétert, ami length és nem position 
length az itt a length-je az eredeti string-ünknek, ha nincsen második paraméter, akkor a teljes length-je az eredeti string-nek 
jelen esetben az str1.length az 18 
*/

//beállítjuk a length-et 17-re 
const endResultWithLength = str1.endsWith("best", 17);
console.log(endResultWithLength); 
//true lesz mert az eredeti string-et aminek 18 a length-je azt csak 17-ig vizsgálja(!nincs benne) és így már ez a vége!!! 
//fontos, hogy itt length van és nem index-ek, szóval nem nullával kezdünk, hanem egyel 

/**************************************************************************************************************************************/

//concat() 

/*
conacat-val egymáshoz tudunk főzni két string-et, de a concat() egy tömb metódus is szóval egy tömbhöz hozzá lehet adni másik tömb, tömbök 
értékeit, amelyből lesz egy új tömb az értékekkel 
Itt is lesz egy új string a két string összefüzéséből 

str1.concat(str2) abből lesz egy új string ami str1 meg a str2-t fogja tartalmazni, tehát az str1 és str2 értéke ugyanaz marad nem modofikálódik
*/ 

const str11 = "Hello";
const str12 = "Anna" ;

const concatedString = str11.concat(str12);
console.log(concatedString);//HelloAnna

//ez teljesen olyan mintha azt mondanánk, hogy string11 + string12 de ott lehet, hogy legyen space is str11 + " " + str12

const simpleConcated = str11 + str12;
console.log(simpleConcated); //HelloAnna 
console.log(str11 + " " + str12);
//vagy 
console.log(`${str11}${str12}`); //HelloAnna  itt mégkönnyedébben lehet egy space -> console.log(`${str11} ${str12}`)


/*
De lehet több stringet is egymáshoz concat-olni úgy, mint tömböt is!!!!!!!!!!!!!!!!!!!
*/ 

// megadunk egy üres string-et és ahhoz másoldik értéknek meg a str12-t 
const doubleConcated = str11.concat(" ", str12);
console.log(doubleConcated); //Hello Anna

/*
de így is lehet, nem muszály, hogy a string az egy változóban legyen
*/
console.log("valami".concat("valami"));
const valami = "valami2".concat("valami2");
console.log(valami); //valami2valami2

/*
De viszont jobb ha az operátorokat használjuk + +=, mert ezek gyorsabbak, mint a concat() 
és ezzel is ugye bármennyi string-et össze tudunk füzni!!! 
*/ 

const operatorConcat = "string1" + "string2" + "string3" + "string4";
console.log(operatorConcat); //string1string2string3string4
/********************************************************************************************************************************************/

//repeat() 

/*
Akkor használjuk, hogyha több másolatot akarunk csinálni egy string-ből 
megadjuk a string-et amiből több másolatot (copy-t) szeretnénk csinálni 
->
string.repeat(number)
*/ 

const abc = "abc";
const abcRepeat = abc.repeat(0);
console.log(abcRepeat); //ez visszaad nekünk egy "" üres string-et 

//ha pedig egy, akkor visszaadja az eredeti string-et 
const onceRepeated = abc.repeat(1);
console.log(onceRepeated); //abc

//ha kétszer repeat-eljük, akkor visszaad egy string-et, amibe kétszer lesz az, mint az eredeti string-ben
const twiceRepeated = abc.repeat(2);
console.log(twiceRepeated); //abcabc ugye egy új string-ben és az eredeti string értéke nem fog változni

//ha nem teljes számot adunk meg a repeat-nek, akkor át fogja alakítani interger-ré, egész számmá (lefele)
const convertInteger = abc.repeat(3.5);
console.log(convertInteger); //abcabcabc 3-szor fogja, mert a 3.5 lekerekíti egy integerré ami ugye 3 és annyiszor fogja repeat-elni

//Ha -1 adunk meg akkor error meg akkor is, hogyha 1/0, mert ennek az értéke az infinity lesz 
// console.log(abc.repeat(-1)); invalid count(number) range
console.log(abc.repeat(1/10)); //egy üres string-et adott vissza 
console.log(abc.repeat(10/1)); //abcabcabcabcabcabcabcabcabcabc így viszont visszaadott 10-et szóval lehet törtet 

/*************************************************************************************************************************************/

//trim() trimEnd() trimStart() 

/*
Ezekkel le lehet venni whiteSpace karaktereket, ezt szoktuk használni amikor bekérünk egy értéket, mondjuk egy input mezőből 

Nagyon fontos, hogy ez nem vár paramétereket a trim() leszedi a whiteSpace-t előről és hátulról is, még az End() csak előlről 
és a Start() csak hátulról 

fontos, hogy a trim nem fogja megváltoztatni az eredeti string-et!!! 
*/

const greeting = "       Hello Anna      "; //van whiteSpace elől és hátul is 

const greeted = greeting.trim(); // "Hello Anna" leveszi a whiteSpace-t előlről és hátulról is 

//ez csak előlről veszi le 
const greetedStart = greeting.trimStart(); //"Hello Anna        "

//ez csak hátulról veszi le 
const greetedEnd = greeting.trimEnd(); //"        Hello Anna"

/*
Ha meghívjuk ezeket egy olyan string-en, ami nem tartalmaz whiteSpace, az nem lesz gond csak visszaadja az eredeti string-et 
ugyanaz lesz az új változóban is mint az eredetiben 
*********************************************************************************************************************************************
*/

//padStart() padEnd() 
/*
Ezt használtuk amikor dátumoknál 2012.1.1 azt akartuk, hogy a hónap meg a nap az így nézzen ki 01.01
itt a padStart() kellett, mert elé akartunk karaktert egy nullát és két paramétert várt 
1. milyen hosszu legyen így a string -> 2 mert azt akartuk, hogy 01, ami két hosszúságú 
2. mi legyen amit betegyen elé -> "0"

Még egyszer egy string-hez hozzáadunk egy másik string-et és meg kell adni, hogy mi legyen a hosszúság, tehát a target length 
Start az eredeti string elé fogja rakni az End pedig mögé!!!!!!!!

string.padStart(length, padString)
string.padEnd(length, padString)

de azt is lehet, hogy csak az első paramétert a length-et adjuk meg és akkor a második a padString az alapból space lesz 
*/
const example = "abc";

const paddedJustLength = example.padStart(10);
console.log(paddedJustLength); // "      abc" és akkor length-je az 10 lesz 7 whiteSpace és abc és mivel start ezért előtte lesznek a space-ek 

//ugyanez a padEnd csak ott elöbb lesz az eredeti string és utána a space-ek
const paddedJustLength2 = example.padEnd(10);
console.log(paddedJustLength2); //"abc       "

//most megadunk egy padString-et, amivel ki akarjuk egészíteni 
const padded = example.padStart(10, "foo");
console.log(padded); //foofoofabc és akkor ezzel addig egészíti ki, amig nem lesz 10 - az eredeti string, tehát 7-szer foo meg egy f 

const paddedEnd = example.padEnd(10, "foo");
console.log(paddedEnd); //abcfoofoof ugyanaz, mint az elöbb csak az eredeti string végére teszi be a dolgokat 

//ha nagyobb a string meg a padString length-ja, mint a length mit itt megadunk neki 
const longer = example.padStart(10, "12345678");
console.log(longer); //1234567abc akkor nem teszi hozzá a padString-nek azt a részét, ami nem férne ki 

const longerEnd = example.padEnd(10, "12345678");
console.log(longerEnd); //abc1234567 nem teszi hozzá a végére 

//ha kisebb a length amit megadunk a padStart vagy a padEnd-nél akkor visszaadja az eredeti string-et teljes length-ében 
const shorterLength = example.padStart(2);
console.log(shorterLength); //abc
console.log(example.padEnd(2)); //abc

/************************************************************************************************************************************/

//localeCompare()

/*
Akkor használjuk amikor össze akarunk hasonlítani két string-et 
referencString.localeCompare(compareString)

Ha a referenceString az előbb van, mint a compareString amit megadunk neki -> "a".localeCompare("b");
Vissza fog adni egy numerikus értéket, jelen esetben -1-et vagy -2-t stb.

ha viszont a referenceString a compareString után van akkor egy pozítiv értéket fogunk visszakapni -> "b".localeCompare("a") -> 1, 2 stb.

ha a referenceString meg localeString ugyanaz, akkor visszakapunk 0-át "a".localeCompare("a")

ha a referenceString előtte van akkor "a".localeCompare("b") akkor lehet úgy gondolkodni, hogy a-b tehát 1-2 -> -1
ha meg hátrébb akkor b-a 2-1 -> 1 
ha meg ugyanaz, akkor 0 

van egy második paramétere (locales) ami a browser-ünknek a default language -> legyen english 
referenceString.localeCompare(compareString, locales)

de ezt, hogy locales ezt nem muszály megadni 
*/ 

const localeCompared = "a".localeCompare("b");
console.log(localeCompared); //-1 mert az a előbb van, mint a b 

const localeCompared2 = "b".localeCompare("a");
console.log(localeCompared2); //1

const localeCompared3 = "a".localeCompare("z");
console.log(localeCompared3); //-1 

const localeCompared4 = "aza".localeCompare("zaz");
console.log(localeCompared4); //-1 mindig az első karaktert nézi 

/*****************************************************************************************************************************************/

//search() 

/*
search az match-et keres egy string és egy regex között 

van egy string-ünk megadunk neki egy másik string-et, amit a search() át fog váltani regularExpression-be (REGEX)!!! 
*/ 

const text = "The rain in SPAIN stays mainly in the plain";

const position = text.search("ain");
console.log(position); //5
/*
Visszaad egy index-et ahonnan kezdődik az első match az "ain"-ra!!! 
*/

//de most arra keresünk rá, hogy /ain/, ami teljesen ugyanaz a dolog, mint a "ain"
const position2 = text.search(/ain/);
console.log(position2); //5 

//ha az ain upperCase -> /AIN/ akkor az 14 lesz, mert a 14-től kezdődik az AIN -> search caseSensitive!!!!! 
const position3 = text.search(/AIN/);
console.log(position3); //14 

const position4 = text.search(/AIN/i);
console.log(position4); //5 

/*
Nagyon fontos, hogyha hozzárakjuk az i-t, akkor az egyezést keresi mindegy, hogy uppercase vagy lowercase!!!!!!!!!!!!!!!!
*/ 

//ha nem talál egyezést akkor visszaad -1-et 
const position5 = text.search(/w/);
console.log(position5); //-1 mert mindegyik word karakter és így nem talált pontos egyezést 

/******************************************************************************************************************************************/

//match() 

/*
Nagyon hasonló, mint az elöbb a search(), mindegyik egy regex-et vár és midengyik összehasonlítja a string-et a regex-hez 
string.match(regex) [] vagy null 
string.search(regex) -> index vagy -1 

Különbség a kettő között, hogy a search az visszaadott egy index-et, hogy honnan kezdődik az egyezés vagy ha ninc, akkor -1 
a match viszont visszaad egy tömböt!!! ha meg itt nincsen találat, akkor visszaad null-t!!!!! 
*/

let text2 = "The rain in SPAIN stays mainly in the plain";

const matched = text2.match("ain");
console.log(matched); //['ain', index: 5, input: 'The rain in SPAIN stays mainly in the plain', groups: undefined]
//visszaadta ezt a tömböt az alábbi információkkal, hogy match-> ain, index -> 5, input -> eredeti string, group-ot meg nem használtunk
//search meg csak egy number-t add vissza az index-et 

const matched2 = text2.match(/ain/);
console.log(matched2); //['ain', index: 5, input: 'The rain in SPAIN stays mainly in the plain', groups: undefined]

//ha viszont hozzáírunk egy g-t, ami azt jelenti, hogy global, akkor visszakapjuk az összes match-et egy tömbben!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const matched3 = text2.match(/ain/g);
console.log(matched3); //['ain', 'ain', 'ain'] fontos a g ha vissza akarjuk kapni az összes match-et!!!!!!!!!!!!!!!!!!!

//ha a g-t meg az i-t egyszerre használjuk akkor visszakapjuk az összeset, anélkül, hogy caseSensitive lenne 
const matched4 = text2.match(/ain/gi);
console.log(matched4); //['ain', 'AIN', 'ain', 'ain']

const notMatched = text2.match(/w/);
console.log(notMatched); //null

//matchAll() 

/*
Nagyon fontos, hogy ez az összes egyezést vissza fogja adni egy tömbben!!!!!!!!!!!!!!!!
nem csak az elsőt mint a sima match() 

string.matchAll(regex)
*/

let text3 = "The rain in SPAIN stays mainly in the plain";

const matchedAll = text3.matchAll("ain"); //ugyanaz, mint a /ain/g itt matchAll-ba olyan mintha ez global lenne visszaadja az összeset  
console.log(matchedAll); //RegExpStringIterator {} visszaadott egy ilyet, amin végig lehet menni egy for-val

for(const match of matchedAll) {
    console.log(match)
}

/*
visszaadta az összeset egy tömbbe tömbökben!! 
és ha végigmegyünk a külső tömbön -> 
['ain', index: 5, input: 'The rain in SPAIN stays mainly in the plain', groups: undefined]
['ain', index: 25, input: 'The rain in SPAIN stays mainly in the plain', groups: undefined]
['ain', index: 40, input: 'The rain in SPAIN stays mainly in the plain', groups: undefined]

const matched3 = text2.match(/ain/g);
console.log(matched3); -> ['ain', 'ain', 'ain']

Szóval nem úgy mint a sima match-nél a global, hogy egy tömbbe adta vissza az összes matche-et string-ként!!! 
*/

// const mathcedAll2 = text3.matchAll(/ain/);
// console.log(mathcedAll2); azt a hobát kaptuk, hogy a matchAll egy non-reg expressionnel lett meghívva 


const matchedAll2 = text.matchAll(/ain/gi);
console.log(matchedAll2);

for(const match of matchedAll2) {
    console.log(match);
}

/*

['ain', index: 5, input: 'The rain in SPAIN stays mainly in the plain', groups: undefined]
['AIN', index: 14, input: 'The rain in SPAIN stays mainly in the plain', groups: undefined]
['ain', index: 25, input: 'The rain in SPAIN stays mainly in the plain', groups: undefined]
['ain', index: 40, input: 'The rain in SPAIN stays mainly in the plain', groups: undefined]

és így már 4 match lett AIN-val együtt!!! 
*/

const matchedAll3 = text3.matchAll(/w/gi);
console.log(matchedAll3); // ez meg egy üres tömb ha végigmegyünk rajta [[]] tehát ez most 

/***************************************************************************************************************************************/

//replace() 

/*
replace() amikor egy karakter-t más karakterekkel tudunk kicserélni, de leginkább arra használtuk, hogy egy karakter-t levegyünk 
2 paramétert várt
1. melyik karakter-t akarjuk kicserélni 
2. hogy mire, ha azt akarjuk, hogy a karakter, amit megadunk első paraméterként eltünjön, akkor egy üres string-et kell megadni másodiknak!!

Akkor használjuk, amikor egy substring-et karunk egy másik substring-re kicserélni egy string-ben
vagy minden match-et kiakarunk cserélni egy valamivel substring-vel amit megadunk (replacement)

string.replace(searchString, replacerString)
searchString a subString amit ki akarunk cserélni a string-ünkben a replacerString meg az a subString-re, amire ki akarjuk cserélni 

eredeti string-et nem módosítja 
*/ 

const texts = "Mr Blue has a blue house and a blue car";

const replaced = texts.replace("blue", "red");
console.log(replaced); //Mr Blue has a red house and a blue car -> ugye a Blue az nem match, mert nagy betűs 
//így csak az első megtalálást cseréli ki!!!!!!!!!!!!!!!!!!!!!!! ezért van egy olyan, hogy replaceAll()!!!!

/*
replacerString helyett használhatunk egy replacerFunction, ami egy függvény lesz és ott alkalmazhatunk valami logikát 
ez majd vár egy paramétert, ami az első paramétere lesz a replace-nek az a subString amit ki akarunk cserélni!!!!

*/

const replacedFunction = texts.replace("blue", (match)=> {
    // a match, amit itt várunk az a "blue" lesz 
    return match.toUpperCase();//Blue mert upperCase-eltük és ez lesz a replacerString-ünk!!! 
});

console.log(replacedFunction); //Mr Blue has a BLUE house and a blue car

const replacedFunction2 = texts.replace("blue", ()=> {
    return match = "red";
}) 

console.log(replacedFunction2); //Mr Blue has a red house and a blue car

//a replace() tud egy searchString helyett egy regex-et is fogadni -> string.replace(regex, replacerString)

const regexReplaced = texts.replace(/blue/g, "red");
console.log(regexReplaced); //Mr Blue has a red house and a red car és mivel itt g(global) van ezért mindegyik egyezőséget kicseréli!! 
//ha nem használtuk volna a global-t, akkor csak az elsőt cserélte volna ki

//most meg az i-vel replace-eljük a nagybetűs Blue-t is!!!! fontos a g meg az i!!!!!!!!!!!!!!! 
const regexReplaced2 = texts.replace(/blue/gi, "red");
console.log(regexReplaced2); //Mr red has a red house and a red car

//ebben az eseben is ha használunk regex-et akkor is lehet a második paraméter egy függvény 
const regexFunction = texts.replace(/blue/gi, (match)=> {
    return match.toUpperCase();
});

console.log(regexFunction); //Mr BLUE has a BLUE house and a BLUE car mindegyiket kicseréli ha nagybetűs volt ha kicsi nagybetűsre!!!

//replaceAll 

/*
replace() amikor alapból csak egyet tudunk kicserálni vele kivéve ha regex és ott megadjuk, hogy global!! 
replaceAll() meg alapból kicseréli az összeset!! 
string.replace(searchString, replacerString) 
*/

const texts2 = "Mr Blue has a blue house and a blue car";

const replacedAll = texts2.replaceAll("blue", "red");
console.log(replacedAll); //Mr Blue has a red house and a red car -> ez is caseSensitive Blue nem lesz kicserélve

//függvénnyel string.replace(searchString, replacerFunction)

const replacedAllFunction = texts2.replaceAll("blue", (match)=> {
    return match.toUpperCase(); //mindegyik match upperCase-elve lesz
});

console.log(replacedAllFunction); //Mr Blue has a BLUE house and a BLUE car

//regex-et is fogadhat első paraméterként -> string.replaceAll(regex, replacerString) 
//nagyon fontos is itt, hogy a replaceAll-nál ha regex-et adunk meg akkor mindig kell ott a g!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const regexedAll = texts2.replaceAll(/blue/g, "red");
console.log(regexedAll); //Mr Blue has a red house and a red car

//itt a g mellett megadjuk még az i-t is!! hogy a nagybetűset is kicserélje 
const regexedAll2 = texts2.replaceAll(/blue/gi, "red");
console.log(regexedAll2); //Mr red has a red house and a red car

//itt is tudunk olyat, hogy regex meg egy függvény
const regexedAllFunction = texts2.replace(/blue/gi, (match)=> {
    // return match.concat(Math.floor((Math.random() * 10)) / 10); Mr Blue0.9 has a blue0.5 house and a blue0.1 car
    return match.toUpperCase();
});

console.log(regexedAllFunction); //Mr BLUE has a BLUE house and a BLUE car

//ha a regex-et nem globalis 
//const errorMessage = texts2.replaceAll(/blue/, "red");
//console.log(errorMessage);//errors -> String.prototype.replaceAll called with a non-global RegExp argument

/*****************************************************************************************************************************************/

//toLowerCase() toUpperCase()

/*
Nincsenek paraméterei, az eredeti string nem változik, egy új string lesz upperCase esetén nagybetűvel az eredeti string
lowerCase esetén pedig kisbetűvel 
*/

const greetingAnna = "hello Anna";

const strLower = greetingAnna.toLowerCase();
console.log(strLower); //hello anna

const strUpper = greetingAnna.toUpperCase();
console.log(strUpper); //HELLO ANNA

/*
Mindegy, hogy előtte milyen volt upperCase-nél az összes nagybetűs lesz lowerCase-nél meg az összes kisbetűs!! 
**********************************************************************************************************************************************
*/

//toString() 
//valueOf()  

/*
Ezek a string prototype-jában vannak, szóval nem öröklik az object-től 
string.prototype.toString() string.prototype.valueOf()
*/

//Csinálunk a string-ből egy new String-et 
const stringObject = new String("Hello Anna");
console.log(stringObject); //String {'Hello Anna'}

/*
Ha toString()-et hívjuk meg akkor a primitiv értéket kapjuk "Hello Anna" egy sima string-et ugyanígy a valueOf()-val!!! 
*/

console.log(stringObject.toString()); //Hello Anna
console.log(stringObject.valueOf()); //Hello Anna

//szám átalakítása string-é 
let num = 123;
let numStr = num.toString();
console.log(numStr); // Output: "123"
console.log(typeof numStr); // Output: "string"

//boolean átalakítása string-é 
let bool = true;
let boolStr = bool.toString();
console.log(boolStr); // Output: "true"
console.log(typeof boolStr); // Output: "string"

//tömb átalakítása string-é 
let arr = [1, 2, 3];
let arrStr = arr.toString();
console.log(arrStr); // Output: "1,2,3"
console.log(typeof arrStr); // Output: "string"

//date 
let date = new Date();
let dateStr = date.toString();
console.log(dateStr); // Output: "Sat May 25 2024 12:34:56 GMT+0000 (Coordinated Universal Time)"
console.log(typeof dateStr); // Output: "string"

/*
Hogy alakítunk egy objektumot át string-é, fontos, hogy simán nem lehet, mert ezt fogjuk kapni, hogy [object, object]
*/ 

let obj = { key: 'value' };
let objStr = obj.toString();
console.log(objStr); // Output: "[object Object]"

let customObj = {
  key: 'value',
  toString: function() {
    return `Custom Object with key: ${this.key}`;
    /*
    mikor csináltuk a class-okat ott is úgy volt a referencia, hogy this.car és akkor az "Volvo" volt ha konzoloztuk!!! 
    */

  }
};
console.log(customObj.toString()); // Output: "Custom Object with key: value"

const object = {
    brand: "Volvo",
    carBrand: function() {
        console.log(`${this.brand} is a very good car`);
    }
}

object.carBrand(); //Volvo is a very good car
/**************************************************************************************************************************************/

const stringOne = "Spain is the best place for holiday";
const stringTwo = "My favorite island is Corsica";

//charAt 
console.log(stringOne.charAt(1)); //p 

//concat 
console.log(stringOne.concat(stringTwo)); //Spain is the best place for holidayMy favorite island is Corsica

//endsWith()
console.log(stringOne.endsWith("ain")); //false
console.log(stringOne.endsWith("day")); //true 
//második érték itt lehet egy szám is a length, hogy meddig nézze!! 

//indexOf 
console.log(stringOne.indexOf("in")); //3 3-dik index-től kezdődik (első megtalálást nézi csak)




