package com.hd.BPLC.controller;

import com.hd.BPLC.domain.theme;
import com.hd.BPLC.domain.themeDetail;
import com.hd.BPLC.service.themeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class themeController {
    @Autowired
    themeService service;

    @GetMapping("/dao/theme")
    @ResponseBody
    public theme getTheme(@RequestParam(value="gernename")String gernename){
        theme result = service.getThemeinfo(gernename);

        return result;
    }

    @GetMapping("/dao/detail/theme")
    @ResponseBody
    public themeDetail getThemedetailcontroller(@RequestParam(value="filename")String filename){
        themeDetail result = service.getThemeDetail(filename);

        return result;
    }

    @GetMapping("/dao/search/theme")
    @ResponseBody
    public theme getThemeSearch(@RequestParam(value="gernename")String gernename, @RequestParam(value="searchdata")String searchdata){
        theme result = service.getThemeSearch(gernename, searchdata);

        return result;
    }
}
