import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';
import './EmployeeList.css';

const EmployeeList = () => {
    const navigate = useNavigate()
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = () => {
            EmployeeService.getEmployees()
                .then(response => {
                    setEmployees(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the employees!", error);
                });
        };
        fetchEmployees();
    }, []);

    

    const deleteEmployee = (id) => {
        EmployeeService.deleteEmployee(id)
            .then(response => {
                setEmployees(employees.filter(employee => employee.id !== id));
            })
            .catch(error => {
                console.error("There was an error deleting the employee!", error);
            });
    };

    return (
        <div>
            <h2 align="center">Employee List</h2>
            <table> 
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {Array.isArray(employees) && employees.length > 0 ? (
     employees.map((employee) => (
        <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>
                <button onClick={() => navigate(`/edit-employee/${employee.id}`)}>Edit</button>
                <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
            </td>
        </tr>
    ))
) : (
    <tr>
        <td colSpan="4">No employees found</td>
    </tr>
)}

                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;
