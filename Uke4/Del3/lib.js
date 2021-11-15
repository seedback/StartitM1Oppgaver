function checkEMail(txt) {
  // Must be first so it doesn't try to run functions on a null or undefined
  if (!txt) return false;

  let atIndex = txt.indexOf('@');
  let firstDotIndex = txt.indexOf('.');
  let secondDotIndex = txt.indexOf('.', atIndex);

  if (txt.indexOf('@') == -1) return false;
  if (txt.indexOf(' ') != -1) return false;
  if (firstDotIndex > atIndex) return false;
  if (secondDotIndex < atIndex) return false;
  return true;
}