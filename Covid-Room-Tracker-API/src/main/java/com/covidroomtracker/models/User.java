package com.covidroomtracker.models;

import java.util.Date;

public class User {
    private Date date;
    private Date last_updated;

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Date getLast_updated() {
        return last_updated;
    }

    public void setLast_updated(Date last_updated) {
        this.last_updated = last_updated;
    }
}
