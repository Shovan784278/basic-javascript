//Here is the first example of filter in an array.. 

/* In JavaScript, the filter() method is used to filter an array based on a specified condition. It returns a new array with all the elements that meet the specified condition. */

// const numbers = [1,2,3,4,5];

// const filterNum = numbers.filter(number=>number > 3);

// console.log(filterNum);

/* Write a function that takes an array of strings as input and returns a new array with only the strings that contain the letter "a". */

const filterStrings = (strings) => {
    return strings.filter(string => string.includes("A"));
  }

const alpha = ["Alamin","Bablu","Motin","Akash","Arif"];
const filtering = filterStrings(alpha);
console.log(filtering);


//-----------------------Here are some filter problems bellow----------------

/* Write a function that takes an array of numbers as input and returns a new array with only the numbers greater than 5.

Write a function that takes an array of strings as input and returns a new array with only the strings that contain the letter "a".

Write a function that takes an array of objects (each with a "name" and "age" property) and returns a new array with only the objects where the person's age is greater than 30.

Write a function that takes an array of objects (each with a "name" and "email" property) and returns a new array with only the objects where the person's email address ends with ".com".

Write a function that takes an array of strings as input and returns a new array with only the strings that are longer than 5 characters. */