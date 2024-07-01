"use strict";
let Student1 = {
    name: "Dagmar Stolz",
    address: "Baum",
    matrikel: 12345,
    awesome: true,
};
let Student2 = {
    name: "Piet Scholz",
    address: "Ast",
    matrikel: 67891,
    awesome: true,
};
let Students = [Student1, Student2];
function StudentInfo(student) {
    console.log(student.name, "lives at", student.address, "and has matricel number", student.matrikel);
}
for (let i = 0; i < Students.length; i++) {
    StudentInfo(Students[i]);
}
console.log(Student1);
Student1.address = "Blatt";
console.log(Student1.address);
//# sourceMappingURL=InterfaceTest.js.map