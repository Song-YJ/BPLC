package com.hd.BPLC.domain;

public class eventsiteDetail {

    private String id;
    private String name;
    private String startdate;
    private String enddate;
    private String explanation;
    private String address;
    private String photopath;
    private String phone=null;
    private String oper_time;
    private String homepage=null;
    private String holiday=null;
    private String detail=null;
    private String entryfee;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStartdate() {
        return startdate;
    }

    public void setStartdate(String startdate) {
        this.startdate = startdate;
    }

    public String getEnddate() {
        return enddate;
    }

    public void setEnddate(String enddate) {
        this.enddate = enddate;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhotopath() {
        return photopath;
    }

    public void setPhotopath(String photopath) {
        this.photopath = photopath;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getOper_time() {
        return oper_time;
    }

    public void setOper_time(String opertime) {
        this.oper_time = opertime;
    }

    public String getHomepage() {
        return homepage;
    }

    public void setHomepage(String homepage) {
        this.homepage = homepage;
    }

    public String getHoliday() {
        return holiday;
    }

    public void setHoliday(String holiday) {
        this.holiday = holiday;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public String getEntryfee() {
        return entryfee;
    }

    public void setEntryfee(String entryfee) {
        this.entryfee = entryfee;
    }

    public String getExplanation(){ return explanation; }

    public void setExplanation() { this.explanation = startdate + " ~ " + enddate; }
}
