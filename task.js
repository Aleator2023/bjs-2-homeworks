function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];  
}

Student.prototype.setSubject = function (subjectName) {
 if (!this.excluded) {
    this.subject = subjectName;
 } 
};

Student.prototype.addMarks = function (...marks) {
  if (!this.excluded) {
    if (!this.marks) {
        this.marks = [];
    }
    this.marks.push(...marks)
  }
};

Student.prototype.getAverage = function () {
  if (!this.excluded && this.marks && this.marks.length > 0) {
    const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
    return sum / this.marks.length;
  } else {
    return 0;
  }
};

Student.prototype.exclude = function (reason) {
  this.subject = undefined;
  this.marks = undefined;
  this.excluded = reason;
};

let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);
// {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Algebra"}
let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)
// {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}
