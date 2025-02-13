class Student {
      name = "Adrien";
      grades = new Map([
        ["Web Pages", 16.13],
        ["Backend", 18.89],
        ["Frontend", 17.57],
        ["Systems Architecture", 18.25],
        ["Design UI/UX", 16.91]
      ]);  
}

let student1 = new Student();
let sum = 0;

for(let [key, value] of student1.grades){
  console.log(student1.name + " in " + key + " has " + value);
  sum += value
}

console.log(student1.name + " has a median of " + (sum/student1.grades.size) + " this semester.");