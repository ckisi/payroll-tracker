// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
// Gets user input to create and return an array of employee objects
const collectEmployees = function() {

  let employeesArray = [];


  let enterData = true;
  
  while (enterData) {
  let firstName = window.prompt("Enter first name:");
  // Cancels the collectEmployees function if cancel is pressed
  if (!firstName) {
    return;
  }
  
  let lastName = window.prompt("Enter last name:");
  // Cancels the collectEmployees function if cancel is pressed
  if (!lastName) {
    return;
  }
  
  let salary = window.prompt("Enter salary:");
  // Cancels the collectEmployees function if cancel is pressed
  if (!salary) {
    return;
  }
  
  // Creates an object out of the 3 responses
  let employeeObject = { firstName: firstName, lastName: lastName, salary: salary };
  // Adds the object to the array
  employeesArray.push(employeeObject);
  // If OK is pressed, the while loop continues; if cancel is pressed, the while loop ends
  enterData = window.confirm("Would you like to add another employee?");
  }
  // Returns the array of employee objects
  return employeesArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
