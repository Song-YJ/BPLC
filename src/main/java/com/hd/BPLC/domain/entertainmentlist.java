package com.hd.BPLC.domain;

import java.util.List;

public class entertainmentlist {
    private int totallistnum;
    private String category = "entertainment";
    private List<entertainmentdetail> lists;

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

    public List<entertainmentdetail> getLists() {
        return lists;
    }

    public void setLists(List<entertainmentdetail> lists) {
        this.lists = lists;
    }
}
