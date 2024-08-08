package com.kgisl.employeemanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kgisl.employeemanagement.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}

