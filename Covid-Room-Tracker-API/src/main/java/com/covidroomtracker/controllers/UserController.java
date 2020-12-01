package com.covidroomtracker.controllers;

import com.covidroomtracker.entities.UserEntity;
import com.covidroomtracker.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;



@RequestMapping("/api/v1/users")
@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/date")
    public void getChangeDate(@RequestParam("date") @DateTimeFormat(pattern = "dd.MM.yyyy") Date date){

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
