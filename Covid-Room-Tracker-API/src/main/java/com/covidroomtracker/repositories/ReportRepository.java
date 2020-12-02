package com.covidroomtracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.covidroomtracker.entities.ReportEntity;

import java.sql.Timestamp;
import java.util.List;

@Repository
public interface ReportRepository extends JpaRepository<ReportEntity,Long>{

    @Query(value="select * from reports u where NOW() - interval '14 day' < u.date and fk_uid in :userId", nativeQuery = true)
    List<ReportEntity> getLastUpdated(@Param("userId") List<String> userId);
}
