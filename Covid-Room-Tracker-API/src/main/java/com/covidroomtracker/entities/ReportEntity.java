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
@Table(name = "reports")
public class ReportEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name="date")
    private Timestamp date;
    @Column(name ="fk_uid")
	private String fk_uid;
	@Column(name="result")
	private boolean result;
	@Column(name="fk_oid")
	private String fk_oid;

    public ReportEntity(){
        super();
    }
	public String getFk_oid() {
		return fk_oid;
	}
	public void setFk_oid(String fk_oid) {
		this.fk_oid = fk_oid;
	}
	public boolean isResult() {
		return result;
	}
	public void setResult(boolean result) {
		this.result = result;
	}
	public ReportEntity(int id, Timestamp date, String fk_uid, boolean result, String fk_oid) {
        super();
		this.setId(id);
		this.setDate(date);
		this.setFk_uid(fk_uid);
		this.setResult(result);
		this.setFk_oid(fk_oid);
	}

	public String getFk_uid() {
		return fk_uid;
	}

	public void setFk_uid(String fk_uid) {
		this.fk_uid = fk_uid;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Timestamp date) {
		this.date = date;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
}
