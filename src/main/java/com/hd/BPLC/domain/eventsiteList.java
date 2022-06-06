package com.hd.BPLC.domain;

import java.util.List;

public class eventsiteList {

    private int totallistnum;
    private String category;
    private List<eventsiteDetail> lists;

    public eventsiteList(){

    }
    public eventsiteList(String category){
        this.category = category;
    }

    public int getTotallistnum() {
        return totallistnum;
    }

    public void setTotallistnum(int totallistnum) {
        this.totallistnum = totallistnum;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public List<eventsiteDetail> getLists() {
        return lists;
    }

    public void setLists(List<eventsiteDetail> lists) {
        this.lists = lists;
    }
}
