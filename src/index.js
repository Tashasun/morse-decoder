const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let digit = 0;
  let newArr = [];
  let newExpr = "";
  let l = expr.length
  for (let i = 0; i < l; i+=10) {
      let arr = expr.split("", 10);
      newArr.push(arr.join(""));
      expr = expr.slice(10);
    }
    for (let i = 0; i < newArr.length; i++) {
    let helpResult = "";
    if(newArr[i]==='**********') {
      newExpr += " ";
      continue;
    }
    let help = Number(newArr[i]);
    while (help > 0) {
      digit = help % 100;
    //   console.log(digit);
      help = Math.floor(help / 100);
      if (digit === 10) {
        digit = ".";
      } else {
        digit = "-";
      }
      helpResult = `${digit}` + helpResult;
    }
    let char = MORSE_TABLE[helpResult]
    newExpr = newExpr + char;
  }

  return newExpr;
}

  module.exports = {
      decode
}
