package com.covidroomtracker.models;

public class Meeting {

    private String organizationId;

    public Meeting(){}
    public Meeting(String organizationId){
        this.setOrganizationId(organizationId);
    }

    public String getOrganizationId() {
        return organizationId;
    }

    public void setOrganizationId(String organizationId) {
        this.organizationId = organizationId;
    }
}
