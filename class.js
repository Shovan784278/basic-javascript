// let age = 19;
// let gender = "male";
// let occupation = "student";

// if(age > 18){
//     if(gender == "male"){
//         if(occupation == "student"){
//             console.log("This is male student over 18 years");
//         }else{
//             console.log("He is male but not a student");
//         }
//     }else{
//         console.log("Not a male");
//     }
// }else{
//     console.log("Not over 18 years old");
// }


//Here is the ternary operator example

let age = 19;
let gender = "male";
let occupation = "student";
let message = age > 18 && gender == "male" && occupation == "student"
  ? console.log("This is male student over 18 years")
  : age <= 18
    ? console.log("Not over 18 years old")
    : gender != "male"
      ? console.log("Not a male")
      : console.log("He is male but not a student");


console.log(message);

