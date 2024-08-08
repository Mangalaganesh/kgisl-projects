package com.kgisl.employeemanagement.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainMenuController {

    @GetMapping("/main-menu")
    public String mainMenu() {
        return "main-menu";
    }
}

