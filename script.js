/*Pokud pečete podle anglických receptů, často se po váš požaduje rozehřát troubu na uvedenou teplotu. Pokud si ovšem neuvědomíte, že Američané používají pro měření teploty stupně Fahrenheita namísto Celsia, bude vás na konci pečení čekat nemilé překvapení.

Nastudujte si na České Wikipedii jak se převádějí stupně Fahrenheita na stupně Celsia a vytvořte webovou stránku, která takový převod provede. Vaše stránka se zeptá uživatele teplotu ve stupních Fahrenheita a pomocí document.body.innerHTML vypíše její ekvivalent ve stupních Celsia.*/

const stupneFahrenheit = Number(prompt("Jakou teplotu ve stupních Fahrenheita chcete převést na stupně Celsia?:"));
let stupneCelsia = Math.ceil((5 * ( stupneFahrenheit - 32)) / 9)

document.body.innerHTML = " Teplota " + stupneFahrenheit + "° Fahrenheita je přibližně " + stupneCelsia + "° Celsia."