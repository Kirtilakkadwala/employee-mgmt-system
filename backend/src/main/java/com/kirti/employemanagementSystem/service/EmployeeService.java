package com.kirti.employemanagementSystem.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kirti.employemanagementSystem.entity.Employee;
import com.kirti.employemanagementSystem.repository.EmployeeRepository;

@Service
public class EmployeeService {
	 @Autowired
	    private EmployeeRepository employeeRepository;
	    
	    public List<Employee> getAllEmployees() {
	        return employeeRepository.findAll();
	    }
	    
	    public Optional<Employee> getEmployeeById(Long id) {
	        return employeeRepository.findById(id);
	    }
	    
	    public Employee createEmployee(Employee employee) {
	        return employeeRepository.save(employee);
	    }
	    
	    public Employee updateEmployee(Long id, Employee employeeDetails) {
	        Employee employee = employeeRepository.findById(id)
	                .orElseThrow(() -> new RuntimeException("Employee not found with id " + id));
	        
	        employee.setName(employeeDetails.getName());
	        employee.setEmail(employeeDetails.getEmail());
	        
	        return employeeRepository.save(employee);
	    }
	    
	    public void deleteEmployee(Long id) {
	        Employee employee = employeeRepository.findById(id)
	                .orElseThrow(() -> new RuntimeException("Employee not found with id " + id));
	        employeeRepository.delete(employee);
	    }
}
