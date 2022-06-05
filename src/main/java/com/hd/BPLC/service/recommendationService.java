package com.hd.BPLC.service;

import com.hd.BPLC.domain.chartAllCategoryData;
import com.hd.BPLC.domain.chartData;
import com.hd.BPLC.repository.recommendationRepository;

public class recommendationService {
    recommendationRepository repository;

    public recommendationService(recommendationRepository repository){
        this.repository = repository;
    }

    private chartData getTripsiteChartData(String category){
        chartData result = new chartData();
        result.setUrl("/tripsite/" + category + "detail/");
        result.setLists(repository.getTripsiteChartData(category));
        result.setTotallikes(repository.getTotallikes(category));

        return result;
    }

    private chartData getThemeChartData(){
        chartData result = new chartData();

        result.setUrl("/recommendation/themedetail/");
        result.setLists(repository.getThemeChartData());
        result.setTotallikes(repository.getTotallikes("theme_course"));

        return result;
    }

    public chartAllCategoryData getAllChartData(){
        chartAllCategoryData result = new chartAllCategoryData();
        result.setEntertainment(getTripsiteChartData("entertainment"));
        result.setFood(getTripsiteChartData("food"));
        result.setSight(getTripsiteChartData("sight"));
        result.setHotel(getTripsiteChartData("hotel"));
        result.setTheme_course(getThemeChartData());

        return result;
    }
}
