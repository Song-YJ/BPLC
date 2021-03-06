package com.hd.BPLC;

import com.hd.BPLC.repository.*;
import com.hd.BPLC.service.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
public class SpringConfig {
    private final DataSource datasource;

    public SpringConfig(DataSource datasource){
        this.datasource = datasource;
    }

    @Bean
    public tripsiteRepository TripsiteRepository(){
        return new tripsiteRepository(datasource);
    }

    @Bean
    public tripsiteService TripsiteService(){
        return new tripsiteService(TripsiteRepository());
    }

    @Bean
    public tripinfoRepository TripinfoRepository(){
        return new tripinfoRepository(datasource);
    }

    @Bean
    public tripinfoService TripinfoService() { return new tripinfoService(TripinfoRepository()); }

    @Bean
    public themeRepository ThemeRepository(){
        return new themeRepository(datasource);
    }

    @Bean
    public themeService ThemeService() { return new themeService(ThemeRepository()); }

    @Bean
    public eventsiteRepository EventsiteRepository() { return new eventsiteRepository(datasource); }

    @Bean
    public eventsiteService EventsiteService() { return new eventsiteService(EventsiteRepository()); }

    @Bean
    public recommendationRepository RecommendationRepository() { return new recommendationRepository(datasource); }

    @Bean
    public recommendationService RecommendationService() { return new recommendationService(RecommendationRepository()); }
}
