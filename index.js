const studentName1 = "Tyrion";
const studentSurname1 = "Lannister";
const studentAge1 = 39;

const studentName2 = "Arya";
const studentSurname2 = "Stark";
const studentAge2 = 11;

const courseName1 = "HTML de 0 a héroe";
const courseDifficulty1 = "nivel básico";
const courseLength1 = 12;

const courseName2 = "CSS de 0 a héroe";
const courseDifficulty2 = "nivel intermedio";
const courseLength2 = 30;

const courseName3 = "JavaScript de 0 a héroe";
const courseDifficulty3 = "nivel avanzado";
const courseLength3 = 48;

console.log("INFORME DE LA ESCUELA\n");
console.log("Cursos:");
console.log(
  "- " +
    courseName1 +
    " (" +
    courseDifficulty1 +
    ", " +
    courseLength1 +
    " horas)"
);
console.log(
  "- " +
    courseName2 +
    " (" +
    courseDifficulty2 +
    ", " +
    courseLength2 +
    " horas)"
);
console.log(
  "- " +
    courseName3 +
    " (" +
    courseDifficulty3 +
    ", " +
    courseLength3 +
    " horas)\n"
);
console.log("Alumnos:");
console.log(
  "- " + studentName1 + " " + studentSurname1 + ", " + studentAge1 + " años"
);
console.log(
  "- " + studentName2 + " " + studentSurname2 + ", " + studentAge2 + " años\n"
);
console.log(
  "Edad media de los alumnos: " + (studentAge1 + studentAge2) / 2 + " años"
);
