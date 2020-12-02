package com.covidroomtracker.controllers;


import com.covidroomtracker.entities.MeetingsEntity;
import com.covidroomtracker.models.Meeting;
import com.covidroomtracker.services.MeetingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.Console;
import java.util.List;

@RequestMapping("/api/v1/meetings")
@RestController
public class MeetingsController {

    @Autowired
    private MeetingsService meetingsService;

    @GetMapping
    public List<MeetingsEntity> getMeetings(@RequestBody Meeting meeting){
        return meetingsService.getFourteenDayMeetings(meeting.getOrganizationId());
    }

    @PostMapping
    public void addMeetings(@RequestBody List<MeetingsEntity> meetings){
        meetingsService.insertMeetings(meetings);
    }

}
