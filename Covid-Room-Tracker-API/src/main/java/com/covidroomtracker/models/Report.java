package com.covidroomtracker.models;

import java.util.Date;
public class Report {
    
    private Date date;
    private String userId;
    private Boolean result;

	public Report(){}
	public Report(Date date, String userId, Boolean result) {
		this.date = date;
		this.userId = userId;
		this.result = result;
	}
	public Date getDate() {
		return date;
	}

	public Boolean getResult() {
		return result;
	}

	public void setResult(Boolean result) {
		this.result = result;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public void setDate(Date date) {
		this.date = date;
	}


}
