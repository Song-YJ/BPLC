package com.hd.BPLC.domain;

import java.util.List;

public class theme {
    private int totallistnum;
    private List<themeDetail> lists;

    public int getTotallistnum() {
        return totallistnum;
    }

    public void setTotallistnum(int totallistnum) {
        this.totallistnum = totallistnum;
    }

    public List<themeDetail> getLists() {
        return lists;
    }

    public void setLists(List<themeDetail> lists) {
        this.lists = lists;
    }
}
