package com.covidroomtracker.controllers;

import com.covidroomtracker.entities.UserEntity;
import com.covidroomtracker.repositories.UserRepository;
import com.covidroomtracker.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.sql.Time;
import java.sql.Timestamp;


@RequestMapping("/api/v1/users")
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/last_updated/{id}")
    public Timestamp getChangeDate(@PathVariable("id") String id){
        return userService.getLastUpdatedTime(id);
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
