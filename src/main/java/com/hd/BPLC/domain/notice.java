package com.hd.BPLC.domain;

import java.util.List;

public class notice {
    private int totallistnum;
    private List<noticeDetail> lists;

    public int getTotallistnum() {
        return totallistnum;
    }

    public void setTotallistnum(int totallistnum) {
        this.totallistnum = totallistnum;
    }

    public List<noticeDetail> getLists() {
        return lists;
    }

    public void setLists(List<noticeDetail> lists) {
        this.lists = lists;
    }
}
