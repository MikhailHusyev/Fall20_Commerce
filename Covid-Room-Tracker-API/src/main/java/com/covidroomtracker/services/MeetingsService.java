package com.covidroomtracker.services;

import com.covidroomtracker.entities.MeetingsEntity;
import com.covidroomtracker.models.Meeting;
import com.covidroomtracker.repositories.MeetingsRepository;
import com.covidroomtracker.repositories.UserRepository;
import org.hibernate.criterion.CriteriaQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Time;
import java.util.List;
import java.sql.Timestamp;

@Service
public class MeetingsService {

    @Autowired
    private MeetingsRepository meetingsRepository;

    public List<MeetingsEntity> getFourteenDayMeetings(String organizationId){
        return meetingsRepository.findPriorMeetings(organizationId);
    }

    public void insertMeetings(List<MeetingsEntity> meetings){
        meetingsRepository.saveAll(meetings);
    }

}
