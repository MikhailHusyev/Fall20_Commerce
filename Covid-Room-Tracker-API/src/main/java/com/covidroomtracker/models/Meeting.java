package com.covidroomtracker.models;

import java.security.Timestamp;

public class Meeting {

    private String organizationId;
    private Timestamp date;
    private String roomId;
    private String userId; 

    public Meeting(){}

    public Meeting(String organizationId, Timestamp date, String roomId, String userId){
        this.setOrganizationId(organizationId);
        this.setDate(date);
        this.setRoomId(roomId);
        this.setUserId(userId);
    }

    public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getRoomId() {
		return roomId;
	}

	public void setRoomId(String roomId) {
		this.roomId = roomId;
	}

	public Timestamp getDate() {
		return date;
	}

	public void setDate(Timestamp date) {
		this.date = date;
	}



    public String getOrganizationId() {
        return organizationId;
    }

    public void setOrganizationId(String organizationId) {
        this.organizationId = organizationId;
    }
}
