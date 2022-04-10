let age = 32;
// let userName = "Carlos Murillo";
// let hobbies = ["Carlos", "Daniel", "Murillo", "Jirón"];
// let job = {
//   title: "Developer",
//   place: "New York",
//   salary: 100,
// };

let adultYears;

function calculateAdultYears(userAge) {
  let result;
  result = userAge - 18;
  return result;
}

adultYears = calculateAdultYears(age);
console.log(adultYears);

age = 45;
adultYears = calculateAdultYears(age);
console.log(adultYears);

let carlitos = {
  name: "CarluxElPro",
  toño() {
    console.log("Hello World");
  },
};

carlitos.toño();
