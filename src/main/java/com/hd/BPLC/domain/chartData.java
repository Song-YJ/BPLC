package com.hd.BPLC.domain;

import java.util.List;

public class chartData {
    private List<chartDetailData> lists;
    private int totallikes;
    private String category;

    public List<chartDetailData> getLists() {
        return lists;
    }

    public void setLists(List<chartDetailData> lists) {
        this.lists = lists;
    }

    public int getTotallikes() {
        return totallikes;
    }

    public void setTotallikes(int totallikes) {
        this.totallikes = totallikes;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
