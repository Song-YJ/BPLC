package com.hd.BPLC.controller;

import com.hd.BPLC.domain.eventsiteDetail;
import com.hd.BPLC.domain.eventsiteList;
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
        eventsiteList result = service.getEntertainlistinfo(gernename);

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
    public int getChageType(){
        int result = service.changeType();

        return result;
    }
}
