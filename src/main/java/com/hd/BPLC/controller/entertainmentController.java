package com.hd.BPLC.controller;

import com.hd.BPLC.domain.entertainmentdetail;
import com.hd.BPLC.domain.entertainmentlist;
import com.hd.BPLC.service.entertainmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class entertainmentController {

    @Autowired
    entertainmentService service;

    @GetMapping("/dao/entertainment")
    @ResponseBody
    public entertainmentlist getlistcontroller(@RequestParam(value="gernename")String gernename){
        entertainmentlist result = service.getlistinfo(gernename);

        return result;
    }

    @GetMapping("/dao/detail/entertainment")
    @ResponseBody
    public entertainmentdetail getdetailcontroller(@RequestParam(value="id")String id){
        entertainmentdetail result = service.getdetail(id);

        return result;
    }
}
