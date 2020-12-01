package com.covidroomtracker.repositories;

import com.covidroomtracker.entities.ReportEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<ReportEntity, Long> {

}
