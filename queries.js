// ------------- QUERIES ----------------------------
const allDepartments = `SELECT * FROM departments`;

const allRoles = `SELECT roles.id, roles.title, departments.name AS department, roles.salary
                    FROM roles
                    JOIN departments ON departments.id = roles.department_id`;

const allEmployees = `SELECT emp.id, emp.first_name, emp.last_name,
                        roles.title AS role, departments.name AS department, roles.salary AS salary,
                        CONCAT (manager.first_name, ' ', manager.last_name) AS manager
                        FROM employees AS emp
                        JOIN roles ON emp.role_id = roles.id
                        JOIN departments ON departments.id = roles.department_id
                        LEFT JOIN employees AS manager ON manager.id = emp.manager_id`;

module.exports = { allDepartments, allEmployees, allRoles };