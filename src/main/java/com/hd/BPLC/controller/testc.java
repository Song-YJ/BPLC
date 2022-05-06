package com.hd.BPLC.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class testc {

    @GetMapping("/vue")
    public String vue(){
        return "vue/index";
    }

    @GetMapping("/axiostest")
    @ResponseBody
    public String axiostest(@RequestParam(value = "test")String test){
        String res = "test : " + test;
        return res;
    }
}