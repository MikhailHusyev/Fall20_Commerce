package com.covidroomtracker.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RequestMapping("/api/v1/users")
@RestController
public class UserController {

    
    @GetMapping("/date")
    public void getChangeDate(){

        String test = "";
    }

    @PostMapping("/date")
    public void setChagneDate(){
        String test = "";
    }

    @PostMapping
    public void setUser(){

        String test = "";
    }

    @GetMapping
    public void getUser(){

        String test = "";
    }
}
