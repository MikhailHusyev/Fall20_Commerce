package com.covidroomtracker.controllers;


import java.util.List;

import com.covidroomtracker.entities.ReportEntity;
import com.covidroomtracker.models.Report;
import com.covidroomtracker.repositories.ReportRepository;
import com.covidroomtracker.services.ReportService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/v1/reports")
@RestController
public class ReportController {

	@Autowired
	private ReportService reportService;

    @GetMapping("/report")
	public List<ReportEntity> getReport() {
		return this.reportService.getCovidReportUser("1");
	}
	
	@GetMapping("/{oid}")
	public void getReports(@PathVariable("oid") String userId){
		String test ="test";
	}

	@PostMapping("/report")
	public void addReport(@RequestBody Report report){
		String test = "test";
	}
}
