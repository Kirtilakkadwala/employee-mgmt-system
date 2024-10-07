import React, { useState } from 'react';
//import EmployeeService from '../services/EmployeeService';
//import { useNavigate } from 'react-router-dom';
import './AddEmployee.css';

const AddEmployee = () => {
    //const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const saveEmployee = (e) => {
        e.preventDefault();
        // if (!employee.name || !employee.email) {
        //     alert("Please fill out all fields.");
        //     return;
        // }
        // EmployeeService.createEmployee(employee)
        //     .then(response => {
        //         console.log("Employee added successfully!", response.data);
        //         navigate('/employees');
        //     })
        //     .catch(error => {
        //         if (error.response) {
        //             // Server responded with a status other than 2xx
        //             alert(`Error: ${error.response.data.message || 'Failed to add employee.'}`);
        //         } else if (error.request) {
        //             // Request was made but no response received
        //             alert('Error: No response from the server.');
        //         } else {
        //             // Something else caused the error
        //             alert(`Error: ${error.message}`);
        //         }
        //         console.error("There was an error creating the employee!", error);
        //     });
        
        fetch('http://localhost:8080/employeemanagementsystem/employees/create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(employee),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log('Employee created successfully:', data);
              // Handle success (e.g., show success message or reset form)
            })
            .catch((error) => {
              console.error('Error:', error);
              // Handle error (e.g., show error message)
            });
        
    };

    return (
        <div>
            <h2>Add Employee</h2>
            <form onSubmit={saveEmployee}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={employee.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={employee.email} onChange={handleChange} required />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default AddEmployee;
