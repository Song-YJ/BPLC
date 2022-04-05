package com.hd.BPLC.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class testc {

    @GetMapping("/vue")
    public String vue(){

        return "vue/index";
    }
}