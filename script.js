// let color = prompt("Write a random color (Red, Yellow or Green)");

// if (color == "Red") {
//   console.log("Stop!");
// }
// if (color == "Yellow") {
//   console.log(" Get Ready!");
// }
// if (color == "Green") {
//   console.log("Let's Go!");
// }

// Data Types
// Number , String , Boolean , Symbol , Bigint , Undefined , Null , Object , (Array)...

// let symbolStr = Symbol();

// console.log(typeof symbolStr);

// let bigNumber = 123n;

// console.log(typeof bigNumber);

// let str;

// console.log(typeof str);

// // String

// let firstName = "Serkan"

// console.log(firstName.length);

// console.log(firstName.toString  ());

let ism = prompt("Please Write Your Name");

if (ism) {
  let okOtmena = confirm(
    "\n 1) If You Click On 'OK' Then Your Name Will Be In All Capital Letters \n 2) If You Click On 'Отмена', Your Name Will Be All In Small Letters "
  );

  if (okOtmena) {
    console.log(ism.toUpperCase());
  } else {
    console.log(ism.toLowerCase());
  }
  console.log("Character: " + ism.length);
} else {
  console.log("Bro, Error!");
}
