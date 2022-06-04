package com.hd.BPLC.repository;

import com.hd.BPLC.domain.chartDetailData;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import javax.sql.DataSource;
import java.util.List;

public class recommendationRepository {
    private final JdbcTemplate jdbctemplate;

    public recommendationRepository(DataSource dataSource){
        jdbctemplate = new JdbcTemplate(dataSource);
    }

    public List<chartDetailData> getTripsiteChartData(String category){
        return jdbctemplate.query(
                "SELECT id, name, likes FROM " + category,
                tripsiteChartDataRowmapper(category)
        );
    }

    private RowMapper<chartDetailData> tripsiteChartDataRowmapper(String category) {
        return(rs, rowNum) -> {
            chartDetailData object = new chartDetailData();

            object.setId(rs.getString("id"));
            object.setName(rs.getString("name"));
            object.setLikes(rs.getInt("likes"));
        };
    }
}
