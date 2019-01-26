const inputString = "6721141123101";
const alpha = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

(inputString => {
  const magicNumber = +inputString[0];
  let out = "";
  let payload = inputString
    .slice(1)
    .split("")
    .reverse()
    .join("");

  while (payload.length > 0) {
    const tmpString = payload.slice(0, 2);
    let currentSum = +tmpString;
    out += !out
      ? alpha[currentSum - magicNumber].toUpperCase()
      : alpha[currentSum - magicNumber];
    payload = payload.slice(tmpString.length);
  }
  console.log(out);
})(inputString);
