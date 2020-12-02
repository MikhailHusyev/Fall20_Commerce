package com.covidroomtracker.repositories;

import com.covidroomtracker.entities.ReportEntity;
import com.covidroomtracker.entities.UserEntity;
import org.hibernate.annotations.Parameter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;

@Repository

public interface UserRepository extends JpaRepository<UserEntity, Long> {

    @Query(value="SELECT last_updated FROM users WHERE id = :userId", nativeQuery = true)
    Timestamp getLastUpdated(@Param("userId") String userId);

}
