package com.covidroomtracker.entities;

import java.sql.Timestamp;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "meetings")
public class MeetingsEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name="meeting_date")
    private Timestamp meeting_date;
    @Column(name ="fk_uid")
    private String fk_uid;
    @Column(name="fk_rmid")
    private String fk_rmid;
    @Column(name="fk_oid")
    private String fk_oid;
    @Column(name = "mid") 
    private String mid;

    public MeetingsEntity(){
        super();
    }

	public MeetingsEntity(int id, Timestamp meeting_date, String fk_uid, String fk_rmid, String fk_oid, String mid) {
        super();
        this.setId(id);
        this.setMeeting_date(meeting_date);
        this.setFk_uid(fk_uid);
        this.setFk_rmid(fk_rmid);
        this.setFk_oid(fk_oid);
        this.setMid(mid);
    }

    public String getFk_oid() {
        return fk_oid;
    }
    public void setFk_oid(String fk_oid) {
        this.fk_oid = fk_oid;
    }
    public String getFk_uid() {
        return fk_uid;
    }

    public void setFk_uid(String fk_uid) {
        this.fk_uid = fk_uid;
    }

    public String getFk_rmid() {
        return fk_rmid;
    }

    public void setFk_rmid(String fk_rmid) { this.fk_rmid = fk_rmid;
    }

    public Timestamp getMeeting_date() {
        return meeting_date;
    }

    public void setMeeting_date(Timestamp meeting_date) {
        this.meeting_date = meeting_date;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    public String getMid() {
		return mid;
	}

	public void setMid(String mid) {
		this.mid = mid;
	}

}
