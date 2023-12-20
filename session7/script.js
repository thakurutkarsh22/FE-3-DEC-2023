// const obj = new Object();

const obj = {
  a: 12,
  b: 13,
  name: "akash",
};

// obj.a = 12;
// obj.b = 13;
// obj.name = "akah";

// // instance for Car class

// console.log(obj);

// // Ineration in object

// for (const key in obj) {
//   if (Object.hasOwnProperty.call(obj, key)) {
//     const element = obj[key];
//     console.log(element);
//   }
// }

// const keyValPair = Object.entries(obj);
// console.log(keyValPair); // key value pair back

// const keysList = Object.keys(obj);
// console.log(keysList); // ONLY KEYS

// const keysListValues = Object.values(obj);
// console.log(keysListValues); // ONLY VLAUES

//  -------- ACtiVITY

// const employeeData = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// const abc = {
//   dummy: 1,
//   ap: 100,
// };

// class Util {
//   data;
//   constructor(data) {
//     // contenxt -> this -{}
//     this.data = data;
//   }

//   sumSalaries() {
//     const arrayOfSalaries = Object.values(this.data);
//     let totalSalary = 0;
//     for (let i = 0; i < arrayOfSalaries.length; i++) {
//       totalSalary += arrayOfSalaries[i];
//     }
//     return totalSalary;
//   }

//   averageSalaries() {
//     const sumOfSalary = this.sumSalaries();
//     const noOfEmployees = Object.values(this.data).length;
//     return sumOfSalary / noOfEmployees;
//   }

//   findSalaryRange() {
//     const arrayOfSalaries = Object.values(this.data).sort((a, b) => a - b);
//     const length = arrayOfSalaries.length;
//     return arrayOfSalaries[length - 1] - arrayOfSalaries[0];
//   }
// }

// const employeeDataObj = new Util(employeeData);

// console.log(employeeDataObj);

// const totalSalary = employeeDataObj.sumSalaries();
// const averageSalary = employeeDataObj.averageSalaries();
// const salaryRangge = employeeDataObj.findSalaryRange();
// console.log(totalSalary, averageSalary, salaryRangge);

//  -------- --------- INHERITANCE ---------------------------

// class Parent {
//   properties = 12;

//   constructor(name) {
//     this.name = name;
//   }

//   sum() {
//     console.log("hello");
//   }

//   livingLife() {
//     console.log("living");
//   }
// }

// const parentObj = new Parent("Parent");
// parentObj.livingLife();
// console.log(parentObj);

// // below 18

// class Child extends Parent {
//   toys = 12;
//   constructor(name) {
//     super(); // why this ? -> signature
//     this.name = name;
//   }

//   badHabits() {
//     console.log("yep bad habits");
//   }

//   screenTime() {
//     console.log("100 hrs ");
//   }
// }

// const childObj = new Child("Aman");
// childObj.sum();
// childObj.livingLife();
// childObj.badHabits();
// console.log(childObj);

//  ------------------------ METHOD OVERRIDING -------------------------

// class Student {
//   name;
//   age;
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   markAttendance() {
//     console.log(this.name, " is Present IN CLASS");
//   }
// }

// const utkasrh = new Student("utkasrh", 24);
// console.log(utkasrh);
// utkasrh.markAttendance();

// class SportsCaptain extends Student {
//   constructor(name, age) {
//     super(name, age);
//   }

//   markAttendance() {
//     console.log(this.name, " is Present IN GROUND");
//   }
// }

// const virat = new SportsCaptain("virat", 30);
// console.log(virat);
// virat.markAttendance();

//  activity the office

class Employee {
  name;
  department;

  constructor(name, dep) {
    this.name = name;
    this.department = dep;
  }

  markPresent() {
    console.log(this.name + " is PRESENT");
  }

  getRole() {
    console.log("Employee of office");
  }
}

class Developer extends Employee {
  prefLanguage;
  constructor(name, prefLanguage) {
    super(name, "Engineerring"); // parent
    this.prefLanguage = prefLanguage;
  }

  submitCode() {
    console.log(`Code submitted by ${this.name} from CBC`);
  }

  getRole() {
    // super.getRole();
    console.log("Works with ", this.prefLanguage);
  }
}

// const vivek = new Developer("vivke");

const ankush = new Employee("ankush", "finance");
// const ankit = new Employee("ankit", "IT");

const utkarsh = new Developer("utkarsh", "java");

// console.log(utkarsh, ankush);
// utkarsh.markPresent();
// utkarsh.submitCode();
utkarsh.getRole();
