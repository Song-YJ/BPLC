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
                "SELECT id, name, likes, rank() over (order by likes desc) as 'ranking' FROM " + category + " order by ranking, name",
                tripsiteChartDataRowmapper()
        );
    }

    private RowMapper<chartDetailData> tripsiteChartDataRowmapper() {
        return(rs, rowNum) -> {
            chartDetailData object = new chartDetailData();

            object.setId(rs.getString("id"));
            object.setName(rs.getString("name"));
            object.setLikes(rs.getInt("likes"));
            object.setRanking(rs.getInt("ranking"));

            return object;
        };
    }

    public List<chartDetailData> getThemeChartData(){
        return jdbctemplate.query(
                "SELECT filename, name, likes, rank() over (order by likes desc) as 'ranking' FROM theme_course order by ranking, name",
                themeChartDataRowmapper()
        );
    }

    private RowMapper<chartDetailData> themeChartDataRowmapper() {
        return(rs, rowNum) -> {
            chartDetailData object = new chartDetailData();

            object.setId(rs.getString("filename"));
            object.setName(rs.getString("name"));
            object.setLikes(rs.getInt("likes"));
            object.setRanking(rs.getInt("ranking"));

            return object;
        };
    }

    public int getTotallikes(String category){
        return jdbctemplate.queryForObject(
                "SELECT sum(likes) FROM " + category, Integer.class
        );
    }
}
