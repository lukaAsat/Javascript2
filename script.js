"use strict",


//  N1 

let i = 5;
while (true) {
    console.log(i);
    i++;
    if (i == 100) {
        break;
    }
}



// N2 

let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for (let item1 of array1) {
  if (item1 > 0 && item1 < 10) {
    console.log(item1);
  }
}


//  N3
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < array2.length; i++) {


  if (array2[i] === 5) {


    console.log('არის')
    break;
  }
}

// N4

let array3 = [1, 2, 3, 4, 5];
let sum = 0;
let i = 0;
while (i < array3.length) {
  sum += array3[i];
  i++;
}
console.log(sum);





// N6

let array5 = [1, 2, 3, 7, 6, 9];

for (let i = 0; i < array5.length; i++) 
{
  if (array5[i] !== 7) 
  {


    console.log(array5[i]);
  }
}


// n7 


let user7 = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active",
  } console.log(user7.studentstatus);

//   N8



let usuario = {
    name: 'giorgi',
    age: 20,
    'student status': 'active'
  };
  
  if (user.age < 18 && user['student status'] === 'active') {
    console.log('Hello');
  } else if (user.name === 'levani') {
    console.log('Hello levani');
  } else if (user['student status'] === 'active' || user.age < 25) {
    console.log('Hello World');
  } else {
    console.log('error');
  }


//   N9 


let array9 = [
    [2, -3, 5, 10],
    [25, -24, -11, 100],
    [-6, -7, 10],
  ];
  
  for (let item9 of array9) {
    for (let h of item9) {
      if (h > 0) {
        console.log(h);
      }
    }
  }


//   N10


let array10 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];

for (let item10 of array10) {
  if (item10 % 2 == 0) {
    console.log(item10);
  }
}
for (let item10 of array10) {
  if (item10 % 2 !== 0) {
    console.log(item10);
  }
}


// N11 
let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
  ];
  for (let i = 0; i < users.length; i++) {
    if (users[i].status === true) {
      console.log(users[i]);
      break; 
    }

  }