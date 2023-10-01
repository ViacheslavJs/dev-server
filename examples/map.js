console.log('// map.js:', '\n'); // для информативности
// map:
// использование с массивом объектов:
const users = [
  {
    name: 'Sam',
  },
  {
    name: 'Mike',
  },
  {
    name: 'Sher',
  },
  {
    name: 'Alice',
  }
];

const userNames = users.map(function(user, index, array) { 
  const greet = 'Hello';
  const usersGreet = `${greet} ${user.name}!`;
  const usersMethod = user.name.concat(', Hello!');
  console.log(user, index, array);
  console.log(user.name, index, array);  
  console.log(usersGreet);
  console.log(usersMethod);
  //return user; // если не будет явно возвращаемого значения - новый массив (userNames) будет содержать undefined
  //return usersMethod;
  //return { ...user, usersMethod };
  //return { ...user, name: usersMethod };
  return { ...user, greet: usersMethod };
});
console.log(userNames);
//


/*
// использование с массивом:
const users2 = [
  'John',
  'Mike',
  'Vasya',
  'Petya'
];

const userNames = users2.map(function(user, index, array) {
  const greet = 'Hello';
  const usersGreet = `${greet} ${user}!`;
  const usersMethod = user.concat(', Hello!');
  console.log(user, index, array);  // John 0, Mike 1, Vasya 2, Petya 3
  console.log(usersGreet);
  console.log(usersMethod);
  return user; // если не будет явно возвращаемого значения - новый массив (userNames) будет содержать undefined
  //return usersMethod;
  //return { ...user };
  //return { ...user, usersMethod };
  //return { ...user, name: usersMethod };
  //return { ...user, greet: usersMethod };
});
console.log(userNames);
//
*/

