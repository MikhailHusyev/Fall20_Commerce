package com.covidroomtracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.covidroomtracker.entities.ReportEntity;

@Repository
public interface ReportRepository extends JpaRepository<ReportEntity,Long>{
    
}
