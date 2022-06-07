package com.hd.BPLC.domain;

import java.util.List;

public class searchTripsiteList {
    private int totallistnum;
    private List<searchTripsite> list;

    public int getTotallistnum() {
        return totallistnum;
    }

    public void setTotallistnum(int totallistnum) {
        this.totallistnum = totallistnum;
    }

    public List<searchTripsite> getList() {
        return list;
    }

    public void setList(List<searchTripsite> list) {
        this.list = list;
    }
}
