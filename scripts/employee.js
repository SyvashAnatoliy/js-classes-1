const generateTableButton = document.getElementById('generateTable');
const addEmployerButton = document.getElementById('addEmployer');
const employersNameInput = document.getElementById('employersName');
const employersSalaryInput = document.getElementById('employersSalary');
const employersPositionInput = document.getElementById('employersPosition');


class Table {
  constructor(employers) {
    this.employers = employers;
  }

  getHTML() {
    let tableHTML = '<table border="1">';
    tableHTML += '<tr><th>Name</th><th>Salary</th><th>Position</th></tr>';
    this.employers.forEach(employer => {
      tableHTML += `<tr><td>${employer.name}</td><td>${employer.salary}</td><td>${employer.position}</td></tr>`;
    });
    tableHTML += '</table>';
    return tableHTML;
  }
}

const employers = [
  { name: "John Doe", salary: 50000, position: "Software Engineer" },
  { name: "Jane Smith", salary: 60000, position: "Project Manager" },
  { name: "Sam Johnson", salary: 55000, position: "UX Designer" }
];

const Table1 = new Table(employers);

generateTableButton.onclick = function () {
  const tableContainer = document.getElementById('employee');
  tableContainer.innerHTML = Table1.getHTML();
}

addEmployerButton.onclick = function () {
  const name = employersNameInput.value;
  const salary = parseFloat(employersSalaryInput.value);
  const position = employersPositionInput.value;

  if (name && !isNaN(salary) && position) {
    const newEmployer = { name, salary, position };
    employers.push(newEmployer);
    employersNameInput.value = '';
    employersSalaryInput.value = '';
    employersPositionInput.value = '';
    alert(`New employer added: ${newEmployer.name}, ${newEmployer.salary}, ${newEmployer.position}`);
  } else {
    alert('Invalid input. Please fill in all fields correctly.');
  }
};