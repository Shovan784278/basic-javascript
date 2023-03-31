//-----------------Here is the example of constant(const)array--------------

// const students = ['Shohel','Shovan','Shakil','Rumi'];

// students[0] = 'Sumit';

// console.log(students);

// students.push = 'Bappa'; //In this .push function we can add the new students..
// console.log(students);


//-----------Here is the example of constant object-----------------

const student = {name:"Shovan", roll: '1', courseName : "PHP AND LARAVEL"};

//Here is the example of update value of a key.
student.roll = '001';
console.log(student);

//Here is an another example of update value of a key.
student.courseName = 'JavaScript';
console.log(student);

//Redeclaring a variable with const, in another scope or in another block, is allow to get the value: 

const y = 12; 

{
    const y = 13;
    console.log(y);
}
{
    const y = 14;
    console.log(y);

}