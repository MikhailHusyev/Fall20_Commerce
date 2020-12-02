package com.covidroomtracker.controllers;


import com.covidroomtracker.entities.MeetingsEntity;
import com.covidroomtracker.entities.UserEntity;
import com.covidroomtracker.models.Meeting;
import com.covidroomtracker.services.MeetingsService;
import com.covidroomtracker.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.io.Console;
import java.util.List;

@RequestMapping("/api/v1/meetings")
@CrossOrigin(origins="*")
@RestController
public class MeetingsController {

    @Autowired
    private MeetingsService meetingsService;
    @Autowired
    private UserService userService;

    @PostMapping
    public void addMeetings(@RequestBody List<MeetingsEntity> meetings){
        meetingsService.insertMeetings(meetings);
    }

    @GetMapping("/{user_id}")
    public MeetingsEntity getMeetings(@PathVariable("user_id") String userId){
        return meetingsService.getUserMeetings(userId);
    }

}
