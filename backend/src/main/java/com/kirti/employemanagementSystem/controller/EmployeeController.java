package com.kirti.employemanagementSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.kirti.employemanagementSystem.entity.Employee;
import com.kirti.employemanagementSystem.service.EmployeeService;

@RestController
@RequestMapping("/employeemanagementsystem/employees")
// @CrossOrigin(origins = "http://localhost:3000") // Remove if using global CORS
public class EmployeeController {
    
    @Autowired
    private EmployeeService employeeService;

    // GET /employeemanagementsystem/employees
    @GetMapping
    public ResponseEntity<List<Employee>> getAllEmployees() {
        List<Employee> employees = employeeService.getAllEmployees();
        return ResponseEntity.ok(employees);
    }

    // GET /employeemanagementsystem/employees/{id}
    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
        Employee employee = employeeService.getEmployeeById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found with id " + id));
        return ResponseEntity.ok(employee);
    }

    // POST /employeemanagementsystem/employees
    @PostMapping("/create")
    public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee) {
        Employee createdEmployee = employeeService.createEmployee(employee);
       // return ResponseEntity.ok(createdEmployee);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdEmployee);
        //return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    // PUT /employeemanagementsystem/employees/{id}
    @PutMapping("/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails) {
        Employee updatedEmployee = employeeService.updateEmployee(id, employeeDetails);
        return ResponseEntity.ok(updatedEmployee);
    }

    // DELETE /employeemanagementsystem/employees/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEmployee(@PathVariable Long id) {
        employeeService.deleteEmployee(id);
        return ResponseEntity.noContent().build();
    }
}
