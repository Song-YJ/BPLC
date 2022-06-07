package com.hd.BPLC.service;

import com.hd.BPLC.domain.eventsiteDetail;
import com.hd.BPLC.domain.eventsiteList;
import com.hd.BPLC.domain.searchEventList;
import com.hd.BPLC.repository.eventsiteRepository;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class eventsiteService {

    eventsiteRepository repository;
    public eventsiteService(eventsiteRepository repository){
        this.repository = repository;
    }

    public eventsiteList getExhibitionlistinfo(String gernename){
        eventsiteList result = new eventsiteList("exhibition");

        if(gernename.equals("continue")){
            result.setTotallistnum(repository.getTotallistnum("exhibition", "진행중"));
            result.setLists(repository.getSummaryList("exhibition", "진행중"));
        }else{
            if(gernename.equals("end")){
                result.setTotallistnum(repository.getTotallistnum("exhibition", "진행종료"));
                result.setLists(repository.getSummaryList("exhibition", "진행종료"));
            }
        }

        return result;
    }

    public eventsiteList getFestivallistinfo(String gernename){
        eventsiteList result = new eventsiteList("festival");

        if(gernename.equals("continue")){
            result.setTotallistnum(repository.getTotallistnum("festival", "진행중"));
            result.setLists(repository.getSummaryList("festival", "진행중"));
        }else{
            if(gernename.equals("end")){
                result.setTotallistnum(repository.getTotallistnum("festival", "진행종료"));
                result.setLists(repository.getSummaryList("festival", "진행종료"));
            }else{
                result.setTotallistnum(repository.getTotallistnum("festival", "진행예정"));
                result.setLists(repository.getSummaryList("festival","진행예정"));
            }
        }

        return result;
    }

    public eventsiteDetail getdetail(String tablename, String id){
        eventsiteDetail result = repository.getContentDetail(tablename, id);
        return result;
    }

    public int changeType1(String tablename) {
        LocalDate now = LocalDate.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        String curdate = now.format(formatter);
        int result = repository.changeType1(curdate, tablename);
        return result;
    }

    public int changeType2(String tablename){
        LocalDate now = LocalDate.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        String curdate = now.format(formatter);
        int result = repository.changeType2(curdate, tablename);
        return result;
    }

    public searchEventList getEventSearch(String gernename, String searchdata){
        searchEventList result = new searchEventList();

        if(gernename.equals("all") || gernename.equals("event")) {
            result.setTotallistnum(repository.getEventSearchTotallistnum(gernename, searchdata));
            result.setLists(repository.getEventSearch(gernename, searchdata));
            return result;
        }
        else {
            result.setTotallistnum(repository.getEventSearchTotallistnum(gernename, searchdata));
            return result;
        }
    }
}
