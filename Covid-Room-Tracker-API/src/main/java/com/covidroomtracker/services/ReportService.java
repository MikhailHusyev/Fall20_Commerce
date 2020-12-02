package com.covidroomtracker.services;

import java.util.List;

import com.covidroomtracker.entities.ReportEntity;
import com.covidroomtracker.repositories.ReportRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReportService {
  

	@Autowired
    private ReportRepository reportRepository;

    public List<ReportEntity> getCovidReportUser(String uid){
        return this.reportRepository.findAll();
    }

   public void addCovidReport(ReportEntity report){
       reportRepository.save(report);
   } 
}