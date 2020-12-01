package com.covidroomtracker.repositories;

import com.covidroomtracker.entities.MeetingsEntity;
import org.hibernate.annotations.Parameter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.covidroomtracker.entities.ReportEntity;

import java.sql.Timestamp;
import java.util.List;

public interface MeetingsRepository extends JpaRepository<MeetingsEntity,Long> {

    @Query(value = "select * from meetings m where NOW() - interval '19 day' < meeting_date AND m.fk_oid = :organizationId", nativeQuery = true)
    List<MeetingsEntity> findPriorMeetings(@Param("organizationId")String organizationId);

}

