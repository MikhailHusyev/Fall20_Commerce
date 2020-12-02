package com.covidroomtracker.entities;

import org.apache.catalina.User;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "users")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    @Column(name = "last_updated")
    private Timestamp last_updated;


    @Column(name = "fk_oid")
    private int fk_oid;

    @Column(name ="uid")
    private String uid;

    public UserEntity() {super(); }

    public UserEntity(String id, Timestamp last_updated, int fk_oid, String uid){
        super();
        this.setId(id);
        this.setLast_updated(last_updated);
        this.setFk_oid(fk_oid);
        this.setUid(uid);
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Timestamp getLast_updated() {
        return last_updated;
    }

    public void setLast_updated(Timestamp last_updated) {
        this.last_updated = last_updated;
    }

    public int getFk_oid() {
        return fk_oid;
    }

    public void setFk_oid(int fk_oid) {
        this.fk_oid = fk_oid;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }
}
