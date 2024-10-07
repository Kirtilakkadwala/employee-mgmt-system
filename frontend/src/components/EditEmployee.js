import React, { useState, useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EditEmployee = () => {
    const { id } = useParams(); // To get the employee ID from the URL
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        name: '',
        email: ''
    });

    // Fetch the employee details when the component is mounted
    useEffect(() => {
        EmployeeService.getEmployeeById(id)
            .then(response => {
                setEmployee(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the employee!", error);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const updateEmployee = (e) => {
        e.preventDefault();
        EmployeeService.updateEmployee(employee, id)
            .then(response => {
                navigate('/employees');
            })
            .catch(error => {
                console.error("There was an error updating the employee!", error);
            });
    };

    return (
        <div>
            <h2>Edit Employee</h2>
            <form onSubmit={updateEmployee}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={employee.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={employee.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default EditEmployee;
