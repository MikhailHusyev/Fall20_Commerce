package com.covidroomtracker.entities;

import org.apache.catalina.User;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "users")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "last_updated")
    private Timestamp last_updated;

    @Column(name = "date")
    private Timestamp date;

    @Column(name = "fk_oid")
    private String fk_oid;

    public UserEntity() {super(); }

    public UserEntity(int id, Timestamp date, Timestamp last_updated, String fk_oid){
        super();
        this.setId(id);
        this.setDate(date);
        this.setLast_updated(last_updated);
        this.setFk_oid(fk_oid);

    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Timestamp getLast_updated() {
        return last_updated;
    }

    public void setLast_updated(Timestamp last_updated) {
        this.last_updated = last_updated;
    }

    public Timestamp getDate() {
        return date;
    }

    public void setDate(Timestamp date) {
        this.date = date;
    }

    public String getFk_oid() {
        return fk_oid;
    }

    public void setFk_oid(String fk_oid) {
        this.fk_oid = fk_oid;
    }
}
