package com.covidroomtracker.models;

public class Meetings {
    private String organizationId;

    public Meetings(){}
    public String getOrganizationId() {
        return organizationId;
    }

    public void setOrganizationId(String organizationId) {
        this.organizationId = organizationId;
    }

    public Meetings(String organizationId){
        this.setOrganizationId(organizationId);
    }
}
