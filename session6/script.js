const userObj = {
  user: "utkarsh",
  age: 12,

  xyz: "asdasd",
};

// console.log(userObj, "userObj");

// java

// class

class Person {
  constructor(name, age) {
    this.user = name;
    this.age = age;
  }

  canWalk() {
    console.log("yes");
  }
}

const userObj2 = new Person("utkarsh2", 24);

// console.log(userObj2, userObj2.canWalk());

//  ----------------    COnstructor Functions ---------------------------

function Car(model, color) {
  this.model = model;
  this.color = color;

  this.start = function () {
    console.log("car start mode " + this.model);
  };
}

// const ferrari = new Car("v1", "red");
// console.log(ferrari);
// console.log(ferrari.model);
// console.log(ferrari.color);
// console.log(ferrari.start());

//  activity -----------

function Circle(radius, location) {
  this.radius = radius;
  this.location = location;

  this.draw = function () {
    console.log(this.location);
  };

  this.move = function (nextX, nextY) {
    let newLocation = {
      x: nextX,
      y: nextY,
    };
    this.location = newLocation;
  };
}

let circle = new Circle(5, { x: 10, y: 20 });

// console.log(circle);

// circle.draw();
// circle.move(100, 2000);
// circle.draw();

// ---------- ------------- FEAR OF THIS keyword  ----------------------------

// call site ? -> where that function is called that is known as call site.

// function baz() {
//   // something

//   bar(); // call site of the bar
// }

// function bar() {}

// const barCopy = bar; // -> is this a call site? NO
// barCopy(); // -> Call site.

// bar(); // call site for bar

// 4 Rules to determine the value of THIS

// ------------------------------- RULE 1 -> default binding -----

// function foo() {
//   // this - context - global
//   console.log(this.a);
// }

// var a = 2;
// foo(); // global

// -------------------- - - - - - - -- -  RULE 2 -> Implicit binding ------------

// example 1

// function foo() {
//   // this - context - > obj
//   // this = obj
//   console.log(this.a);
// }
// var obj = {
//   a: 33333,
//   foo: foo,
// };

// console.log(obj.a, "from the obj"); //

// obj.foo(); // call site

//  example 2

// function foo() {
// context -> this -> obj2
//   console.log(this.a);
// }

// var obj2 = {
//   a: 49,
//   foo: foo,
// };

// var obj1 = {
//   a: 22,
//   obj2: obj2,
// };

// obj1.obj2.foo(); // call site 49

// --- pitfalls of RULE 2 ----------------

// function foo() {
//   // context -> global
//   console.log(this.a);
// }
// var obj2 = {
//   a: 49,
//   foo: foo,
// };

// let bar = obj2.foo; // this is NO CALL SITE

// bar(); // call site

// pitfall of rule 2  ----  Example 2 (CALLBACKS)

// const timer = {
//   currentTime: 0,
//   showTime: function () {
//     console.log(this.currentTime);
//   },
//   addTen: function () {
//     this.currentTime += 10;
//     this.showTime();
//   },
// };

// setTimeout(timer.addTen, 500);

// js people ...
// function setTimeout(fun, time) {
//   // wait for time ms

//   fun() // this is call site global

// }

//-------------------  RULE 3 --------- EXPLICIT BINDING --------------------

// 1.  Call

// function foo(param1, param2, param3) {
//   // context => obj
//   console.log(this.a, param1, param2, param3);
// }

// var obj = {
//   a: 12,
// };

// // foo(1, 2, 3);

// foo.call(obj, 1, 2, 3); // call site

// // 2. Apply
// foo.apply(obj, [1, 2, 3]);

// 3.  bind

// function foo() {
//   // context -> obj2
//   console.log(this.a);
// }
// var obj2 = {
//   a: 49,
//   foo: foo,
// };

// let bar = obj2.foo.bind(obj2); // this is NO CALL SITE

// bar(); // call site //

// const timer = {
//   currentTime: 0,
//   showTime: function () {
//     console.log(this.currentTime);
//   },
//   addTen: function () {
//     this.currentTime += 10;
//     this.showTime();
//   },
// };

// const addTenFunctionCopy = timer.addTen.bind(timer);

// setTimeout(addTenFunctionCopy, 500);

// ------------------------------  RULE 4  new keyword------------------------------

function Car(model, color) {
  // context -> {}
  this.model = model;
  this.color = color;

  this.start = function () {
    console.log("car start mode " + this.model);
  };
}

const ferrari = new Car("v1", "red"); // call site

// new keyword creates a blank obj {} and this blank obj Is the CONTEXT OF THE CONSTRUCTOR FUNCTION.

//  RULE PRESEDENCE ------     ---------> INCREASING POWER
//  default < implicit < explicit  <<< new

function foo(something) {
  this.a = something;
}

var obj1 = {
  foo: foo,
};

// obj1.foo(20); //  RULE 2 Implicit bindin  obj1 = {a: 20, foo: function}

var bar = new obj1.foo(4); // RULE 4 WON

console.log(obj1); // {foo: function,}
console.log(bar); // {a: 4}

// Activity -------

function User(fullName) {
  this.fullName = fullName;
  this.friendList = [];

  this.printFriendList = function () {
    console.log(this.friendList);
  };

  this.addFriend = function (friendName) {
    this.friendList.push(friendName);
  };
  this.findMutualsWith = function (user) {
    // context = this = utkarshUser
    const person1 = this;
    const person2 = user;

    const f1List = person1.friendList;
    const f2List = person2.friendList;

    const fultredArrat = f1List.filter((value) => f2List.includes(value));
    return fultredArrat;

    console.log(this, "this");
  };
}

const utkarshUser = new User("utkarsh");
utkarshUser.addFriend("animesh");
utkarshUser.addFriend("ankush");
utkarshUser.addFriend("nitin");

const abhinav = new User("abhinav");
abhinav.addFriend("nitin");
abhinav.addFriend("ankush");
abhinav.addFriend("ankansha");

console.log(utkarshUser, abhinav);

const mutual = utkarshUser.findMutualsWith(abhinav); // RULE 2
console.log(mutual);
