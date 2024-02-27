const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const students = parseStudents(data);

    console.log(`Number of students: ${students.length}`);

    const fields = groupStudentsByField(students);

    for (const [field, studentNames] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${studentNames.length}. List: ${studentNames.join(', ')}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

function parseStudents(data) {
  return data.split('\n')
    .filter(line => line.trim() !== '')
    .map(line => line.split(','));
}

function groupStudentsByField(students) {
  const fields = {};
  students.slice(1).forEach(student => {
    const field = student[3];
    const name = student[0];
    fields[field] = (fields[field] || []).concat(name);
  });
  return fields;
}

module.exports = countStudents;

