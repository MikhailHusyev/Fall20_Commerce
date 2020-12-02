package com.covidroomtracker.controllers;

import com.covidroomtracker.entities.MeetingsEntity;
import com.covidroomtracker.entities.UserEntity;
import com.covidroomtracker.models.CovidResults;
import com.covidroomtracker.models.Meeting;
import com.covidroomtracker.repositories.UserRepository;
import com.covidroomtracker.services.MeetingsService;
import com.covidroomtracker.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.sql.Date;
import java.sql.Time;
import java.sql.Timestamp;
import java.util.List;


@RequestMapping("/api/v1/users")
@RestController
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private MeetingsService meetingsService;

    @GetMapping("/result/{user_id}")
    private CovidResults getCovidResults(@PathVariable("user_id") String userId)
    {
        CovidResults result = new CovidResults();
        result.setResult(meetingsService.getMeetingContactTracing(userId));
        return result;
    }

    @PostMapping("/user")
    private void addUsers(@RequestBody UserEntity user){
        userService.addUser(user);
    }
}
