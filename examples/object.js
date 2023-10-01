console.log('// object.js:', '\n'); // для информативности
// object:
const user = {
  name: 'John',
  age: 25,
  admin: true,
  say: function (word) {
         console.log(`${word} from ${this.name}`);
         this.foo('you age'); // это - обращение НЕ к функции а к методу!
       },
  foo: function(phrase){
    console.log(`${phrase} ${this.age}`);
  }
}; 
user.say('Hello');
//user.foo("Hello");
