package com.hd.BPLC;

import com.hd.BPLC.repository.entertainmentDAO;
import com.hd.BPLC.service.entertainmentService;
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
    public entertainmentDAO EntertainmentDAO(){
        return new entertainmentDAO(datasource);
    }

    @Bean
    public entertainmentService EntertainmentService(){
        return new entertainmentService(EntertainmentDAO());
    }
}
