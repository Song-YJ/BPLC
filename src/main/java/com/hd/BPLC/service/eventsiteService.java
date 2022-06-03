package com.hd.BPLC.service;

import com.hd.BPLC.domain.eventsiteDetail;
import com.hd.BPLC.domain.eventsiteList;
import com.hd.BPLC.repository.eventsiteRepository;

public class eventsiteService {

    eventsiteRepository repository;
    public eventsiteService(eventsiteRepository repository){
        this.repository = repository;
    }

    public eventsiteList getEntertainlistinfo(String gernename){
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

    public eventsiteDetail getdetail(String tablename, String id){
        eventsiteDetail result = repository.getContentDetail(tablename, id);
        return result;
    }
}
