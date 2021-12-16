/*function fixText(txt) {
  txt = txt.trim();

  let firstLetter = txt.slice(0, 1).toUpperCase();
  let remainingLetters = txt.slice(1).toLowerCase();
  firstLetter[0] = firstLetter[0].toUpperCase();
  return firstLetter + remainingLetters;
}*/

function fixText(txt) {
  temp1 = txt.slice(0, 1).toUpperCase();
  temp2 = txt.slice(1).toLowerCase();

  return temp1 + temp2;
}