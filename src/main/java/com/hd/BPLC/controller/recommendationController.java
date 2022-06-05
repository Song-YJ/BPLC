package com.hd.BPLC.controller;

import com.hd.BPLC.domain.chartAllCategoryData;
import com.hd.BPLC.service.recommendationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class recommendationController {
    @Autowired
    recommendationService service;

    @GetMapping("/dao/recommendation/statistics")
    @ResponseBody
    public chartAllCategoryData getChartData(){
        chartAllCategoryData result = service.getAllChartData();

        return result;
    }
}
