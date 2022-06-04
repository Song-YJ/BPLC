package com.hd.BPLC.controller;

import com.hd.BPLC.domain.chartAllCategoryData;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class recommendationController {
    @GetMapping("/dao/recommendation/statistics")
    @ResponseBody
    public chartAllCategoryData getChartData(){
        chartAllCategoryData result = service.getGuidebookinfo();

        return result;
    }
}
