package com.hd.BPLC.domain;

import java.util.List;

public class tripsiteList {
    private int totallistnum;
    private String category;
    private List<tripsiteDetail> lists;

    public tripsiteList(){

    }
    public tripsiteList(String category){
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

    public List<tripsiteDetail> getLists() {
        return lists;
    }

    public void setLists(List<tripsiteDetail> lists) {
        this.lists = lists;
    }
}
