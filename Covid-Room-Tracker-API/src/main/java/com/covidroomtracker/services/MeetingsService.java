package com.covidroomtracker.services;

import com.covidroomtracker.entities.MeetingsEntity;
import com.covidroomtracker.repositories.MeetingsRepository;
import com.covidroomtracker.repositories.ReportRepository;
import com.covidroomtracker.repositories.UserRepository;
import org.hibernate.criterion.CriteriaQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Time;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.sql.Timestamp;

@Service
public class MeetingsService {

    @Autowired
    private MeetingsRepository meetingsRepository;

    @Autowired
    private ReportRepository reportRepository;

    public Boolean getMeetingContactTracing(String userId){
        try{
            List<MeetingsEntity> organizationMeetings = meetingsRepository.findPriorUsersMeetings(userId);
            if(organizationMeetings.isEmpty()) return false;

            List<String> usersInteracted = new ArrayList<String>();
            for(MeetingsEntity meeting : organizationMeetings){
                usersInteracted.add(meetingsRepository.findUsersInMeetingRooms(meeting, meeting.getMeeting_Date()));
            }
            if(usersInteracted.size() <= 0 ) return false;

            return reportRepository.getLastUpdated(usersInteracted).size() > 0;
        }catch (Exception ex){
            return false;
        }
    }




}
