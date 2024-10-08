import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/employeemanagementsystem/employees";

class EmployeeService {
    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    

    getEmployeeById(employeeId) {
        return axios.get(`${EMPLOYEE_API_BASE_URL}/${employeeId}`);
    }

    updateEmployee(employee, employeeId) {
        return axios.put(`${EMPLOYEE_API_BASE_URL}/${employeeId}`, employee);
    }

    deleteEmployee(employeeId) {
        return axios.delete(`${EMPLOYEE_API_BASE_URL}/${employeeId}`);
    }
}

const employeeService = new EmployeeService();

export default employeeService;