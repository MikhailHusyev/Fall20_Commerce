package com.covidroomtracker.services;

import com.covidroomtracker.entities.UserEntity;
import com.covidroomtracker.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public Timestamp getLastUpdatedTime(String userId){
        return userRepository.getLastUpdated(userId);
    }

    public void addUser(UserEntity user){
        userRepository.save(user);
    }

}
