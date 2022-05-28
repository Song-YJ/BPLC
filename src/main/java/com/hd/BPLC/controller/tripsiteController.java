package com.hd.BPLC.controller;

import com.hd.BPLC.domain.tripsiteDetail;
import com.hd.BPLC.domain.tripsiteList;
import com.hd.BPLC.service.tripsiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class tripsiteController {

    @Autowired
    tripsiteService service;

    @GetMapping("/dao/entertainment")
    @ResponseBody
    public tripsiteList getEntertainmentlistcontroller(@RequestParam(value="gernename")String gernename){
        tripsiteList result = service.getEntertainlistinfo(gernename);

        return result;
    }

    @GetMapping("/dao/detail/entertainment")
    @ResponseBody
    public tripsiteDetail getEntertainmentdetailcontroller(@RequestParam(value="id")String id){
        tripsiteDetail result = service.getdetail("entertainment",id);

        return result;
    }

    @GetMapping("/dao/hotel")
    @ResponseBody
    public tripsiteList getHotellistcontroller(@RequestParam(value="gernename")String gernename){
        tripsiteList result = service.getHotellistinfo(gernename);

        return result;
    }

    @GetMapping("/dao/detail/hotel")
    @ResponseBody
    public tripsiteDetail getHotelcontroller(@RequestParam(value="id")String id){
        tripsiteDetail result = service.getdetail("hotel",id);

        return result;
    }

    @GetMapping("/dao/food")
    @ResponseBody
    public tripsiteList getFoodlistcontroller(@RequestParam(value="gernename")String gernename){
        tripsiteList result = service.getFoodlistinfo(gernename);

        return result;
    }

    @GetMapping("/dao/detail/food")
    @ResponseBody
    public tripsiteDetail getFoodcontroller(@RequestParam(value="id")String id){
        tripsiteDetail result = service.getdetail("food",id);

        return result;
    }

    @GetMapping("/dao/sight")
    @ResponseBody
    public tripsiteList getSightlistcontroller(@RequestParam(value="gernename")String gernename){
        tripsiteList result = service.getSightlistinfo(gernename);

        return result;
    }

    @GetMapping("/dao/detail/sight")
    @ResponseBody
    public tripsiteDetail getSightcontroller(@RequestParam(value="id")String id){
        tripsiteDetail result = service.getdetail("sight",id);

        return result;
    }
}
