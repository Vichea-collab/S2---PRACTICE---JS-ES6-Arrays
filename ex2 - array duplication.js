const STUDENTS_DATA = [
  { firstName: "An", lastName: "Nguyen", batch: "2023", age: 20 },
  { firstName: "Bình", lastName: "Tran", batch: "2022", age: 22 },
  { firstName: "Cẩm", lastName: "Le", batch: "2023", age: 21 },
  { firstName: "An", lastName: "Pham", batch: "2024", age: 19 }, // Now uniquely identifiable
];

/**
 * Update a student's age based on first name, last name, and batch.
 * @param {string} firstName - The student's first name
 * @param {string} lastName - The student's last name
 * @param {string} batch - The student's batch
 * @param {number} newAge - The student's new age
 */
function updateStudentAge(firstName, lastName, batch, newAge) {
  let student = STUDENTS_DATA.find(
    (s) => s.firstName === firstName && s.lastName === lastName && s.batch === batch
  );

  if (student) {
    student.age = newAge;
  }
}

// 1 - Update An (Nguyen, batch 2023) age to 30
updateStudentAge("An", "Nguyen", "2023", 30);

// 2 - Print the updated data
console.log(JSON.stringify(STUDENTS_DATA, null, 2));
