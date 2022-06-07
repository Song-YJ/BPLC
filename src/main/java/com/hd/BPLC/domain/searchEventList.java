package com.hd.BPLC.domain;

import java.util.List;

public class searchEventList {
    private int totallistnum;
    private List<searchEvent> lists;

    public int getTotallistnum() {
        return totallistnum;
    }

    public void setTotallistnum(int totallistnum) {
        this.totallistnum = totallistnum;
    }

    public List<searchEvent> getLists() {
        return lists;
    }

    public void setLists(List<searchEvent> lists) {
        this.lists = lists;
    }
}
