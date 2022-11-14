# First Session Questions
## When do you use [] notation and when do you use . operator while extracting properties from objects?
- Property access operators provide access to an object's property by using dot notation and bracket notation.
- The below example shows use of dot and bracket notation;
```js
let polygon = {
    square: 4,
    penagon: 5,
    hexagon: 6
};

let sides_of_squares = polygon.square;      // using dot notation
let sides_of_pentagon = polygon['pentagon'];// using bracket notation
```
- The problem with dot notation is that the property name after dot must be a alphanumeric i.e. special symbols cannot be used, should not start with a number, should not contains whitespaces. Exampls;
```js
polygon.2square = 8;        // is invalid
polygon.recta angle = 4;    // is also invalid
```
- But here bracket  notation comes in handy. Here the property name is valid until it is a string. Example;
```js
polygon['2square'] = 8;       // is valid
polygon['recta angle'] = 4;   // is valid
```
- And another advantage of bracket notation is that the property name can be a string variable as shown below;
```js
let property = 'pentagon';
console.log(polygon.property);  // is invalid
console.log(polygon[property]); // outputs 5

property = 'hexagon';
console.log(polygon[property]); // outputs 6
```

## Create an object that represents you. For example, the object must contain properties like your name, age, college, hobbies etc. Try to combine functions, arrays, objects, arrays of objects etc while constructing the object.
```js
function Person (name, age, college, hobbies) {
    this.name = name;
    this.age = age;
    this.college = college;
    this.hobbies = hobbies;
    this.get_details = function() {
      return 'The person name is '+this.name+' and is '+this.age+' years old and studies in college '+this.college+' and have hobbies '+this.hobbies.map((hobby) => hobby );  
    }
};

let niyoj = new Person('niyoj', 16, "TCIOE", ['coding', 'travelling', 'reading']);

console.log(niyoj.get_details());
```

## When do you use let and const? What are the drawbacks of using var?
- `let` is used when a variable values is to be reassigned example; inside a loop or mathematical algortihm.
- `const` is used when a variable values are not to be reassigned.
- The drawbacks of `var` is that the identifiers with signal `var` has a global scope so, that the connection between identifiers and methods are large which can cause difficult in error handling and one identifier in var inside one funcion is easily overwritten by idenifier with same name at any place of JS.`