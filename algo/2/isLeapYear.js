/*
Écris une fonction qui peut déterminer si une année est une année bissextile. Elle doit renvoyer `true` si c'est le cas, et `false` sinon.
Rappel : Une année bissextile vérifie **une** de ces règles :
- Elle est divisible par 4, sans être divisible par 100
- Elle est divisible par 400
Ex : 2004, 2016 et 2020 sont des années bissextiles
Rappel : Pour vérifier si un nombre est divisible par un autre, tu peux utiliser l'opérateur "modulo" (%)
*/

function isLeapYear(year) {
  // Savoir si l'année reçue est divisible par 4
  // Si oui, savoir si elle n'est pas divisible par 100
  // Si oui, alors l'année est bissextile
  // Si non, alors l'année n'est pas bissextile

  // OU ALORS

  // Savoir si l'année reçue est divisible par 400
  // Si oui, alors l'année est bissextile
  // Si non, alors l'année n'est pas bissextile

  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

module.exports = isLeapYear;
