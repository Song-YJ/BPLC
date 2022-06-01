package com.hd.BPLC.domain;

import java.util.List;

public class guidebook {
    private int totallistnum;
    private List<guidebookDetail> lists;

    public int getTotallistnum() {
        return totallistnum;
    }

    public void setTotallistnum(int totallistnum) {
        this.totallistnum = totallistnum;
    }

    public List<guidebookDetail> getLists() {
        return lists;
    }

    public void setLists(List<guidebookDetail> lists) {
        this.lists = lists;
    }
}
