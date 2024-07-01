interface StudentData {
    name: string,
    address: string,
    matrikel: number,
    awesome: boolean,
}

let Student1: StudentData = {
    name: "Dagmar Stolz",
    address: "Baum",
    matrikel: 12345,
    awesome: true,
}

let Student2: StudentData = {
    name: "Piet Scholz",
    address: "Ast",
    matrikel: 67891,
    awesome: true,
}

let Students: StudentData[] = [Student1, Student2];

function StudentInfo(student: StudentData): void {
    console.log(student.name, "lives at", student.address, "and has matricel number", student.matrikel);
}

for(let i: number = 0; i < Students.length; i++) {
    StudentInfo(Students[i]);
}

console.log(Student1);
Student1.address = "Blatt";
console.log(Student1.address);