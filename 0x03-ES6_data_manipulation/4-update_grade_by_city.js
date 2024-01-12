export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter((student) => student.location === city)
    .map((student) => {
      const dummy = student;
      dummy.grade = 'N/A';
      for (const grade of newGrades) {
        if (grade.studentId === dummy.id) {
          dummy.grade = grade.grade;
          break;
        }
      }
      return dummy;
    });
}
