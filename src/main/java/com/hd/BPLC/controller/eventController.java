package com.hd.BPLC.controller;

import com.hd.BPLC.domain.eventsiteDetail;
import com.hd.BPLC.domain.eventsiteList;
import com.hd.BPLC.domain.searchEventList;
import com.hd.BPLC.service.eventsiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class eventController {

    @Autowired
    eventsiteService service;

    @GetMapping("/dao/exhibition")
    @ResponseBody
    public eventsiteList getExhibitionlistcontroller(@RequestParam(value="gernename")String gernename){
        eventsiteList result = service.getExhibitionlistinfo(gernename);

        return result;
    }

    @GetMapping("/dao/detail/exhibition")
    @ResponseBody
    public eventsiteDetail getExhibitiondetailcontroller(@RequestParam(value="id")String id){
        eventsiteDetail result = service.getdetail("exhibition",id);

        return result;
    }

    @GetMapping("/dao/exhibition/chgtype")
    @ResponseBody
    public int getChangeType(){
        int result = service.changeType1("exhibition");

        return result;
    }

    @GetMapping("/dao/festival")
    @ResponseBody
    public eventsiteList getFestivallistcontroller(@RequestParam(value="gernename")String gernename){
        eventsiteList result = service.getFestivallistinfo(gernename);

        return result;
    }

    @GetMapping("/dao/detail/festival")
    @ResponseBody
    public eventsiteDetail getFestivaldetailcontroller(@RequestParam(value="id")String id){
        eventsiteDetail result = service.getdetail("festival",id);

        return result;
    }

    @GetMapping("/dao/festival/chgtype1")
    @ResponseBody
    public int getChangeType1(){
        int result = service.changeType1("festival");

        return result;
    }

    @GetMapping("/dao/festival/chgtype2")
    @ResponseBody
    public int getChangeType2(){
        int result = service.changeType2("festival");

        return result;
    }

    @GetMapping("/dao/search/event")
    @ResponseBody
    public searchEventList getEventSearch(@RequestParam(value="gernename")String gernename, @RequestParam(value="searchdata")String searchdata){
        searchEventList result = service.getEventSearch(gernename, searchdata);

        return result;
    }
}
