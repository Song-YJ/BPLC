package com.hd.BPLC;

import com.hd.BPLC.repository.eventsiteRepository;
import com.hd.BPLC.repository.tripinfoRepository;
import com.hd.BPLC.repository.tripsiteRepository;
import com.hd.BPLC.service.eventsiteService;
import com.hd.BPLC.service.tripinfoService;
import com.hd.BPLC.service.tripsiteService;
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
    public eventsiteRepository EventsiteRepository() { return new eventsiteRepository(datasource); }

    @Bean
    public eventsiteService EventsiteService() { return new eventsiteService(EventsiteRepository()); }
}
