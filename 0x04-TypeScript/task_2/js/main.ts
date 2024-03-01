interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return "Working from home";
  }
  getCoffeeBreak() {
    return "Getting a coffee break";
  }
  workDirectorTasks() {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return "Working from home";
  }
  getCoffeeBreak() {
    return "Getting a coffee break";
  }
  workTeacherTasks() {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string) {
  if (typeof salary === "number" && salary < 500) return new Teacher();
  else return new Director();
}

function isDirector(employee: any) {
  return typeof employee["workDirectorTasks"] === "function";
}

function executeWork(employee: any) {
  if (isDirector(employee)) console.log(employee.workDirectorTasks());
  else console.log(employee.workTeacherTasks());
}

let Subjects: "Math" | "History";

function teachClass(todayClass: typeof Subjects) {
  return `Teaching ${todayClass}`;
}
