package com.covidroomtracker.controllers;


import com.covidroomtracker.entities.MeetingsEntity;
import com.covidroomtracker.models.Meeting;
import com.covidroomtracker.services.MeetingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.List;

@RequestMapping("/api/v1/meetings")
@RestController
public class MeetingsController {

    @Autowired
    private MeetingsService meetingsService;


    @PostMapping
    public void addMeetings(@RequestBody List<Meeting> meetings){

    }

}
