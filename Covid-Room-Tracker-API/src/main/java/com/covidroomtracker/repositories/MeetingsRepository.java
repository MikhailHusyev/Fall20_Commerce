package com.covidroomtracker.repositories;

import com.covidroomtracker.entities.MeetingsEntity;
import org.hibernate.annotations.Parameter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.covidroomtracker.entities.ReportEntity;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

public interface MeetingsRepository extends JpaRepository<MeetingsEntity,Long> {


    @Query(value = "select * from meetings m where NOW() - interval '14 day' < m.meeting_date AND m.fk_uid = :userId", nativeQuery = true)
    List<MeetingsEntity> findPriorUsersMeetings(@Param("userId")String userId);

    @Query(value = "select DISTINCT fk_uid from meetings m where m.fk_rmid = :#{#meeting.fk_rmid} AND m.fk_uid != :#{#meeting.fk_uid} AND m.meeting_date = :meeting_date LIMIT 1", nativeQuery = true)
    String findUsersInMeetingRooms(@Param("meeting") MeetingsEntity meeting, @Param("meeting_date") Timestamp meetingDate);

    @Query(value = "select * from meetings m where m.fk_uid = :userId", nativeQuery = true)
    MeetingsEntity getUserMeetings(@Param("userId") String userId);
}
