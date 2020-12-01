package com.covidroomtracker.controllers;


import com.covidroomtracker.entities.MeetingsEntity;
import com.covidroomtracker.models.Meetings;
import com.covidroomtracker.services.MeetingsService;
import org.hibernate.annotations.Parameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.sql.Timestamp;

@RequestMapping("/api/v1/meetings")
@RestController
public class MeetingsController {

    @Autowired
    private MeetingsService meetingsService;

    @GetMapping
    public List<MeetingsEntity> getMeetings(@RequestBody Meetings meeting){
        return meetingsService.getFourteenDayMeetings(meeting.getOrganizationId());
    }
}
