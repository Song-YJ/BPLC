package com.hd.BPLC.repository;

import com.hd.BPLC.domain.entertainmentdetail;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import javax.sql.DataSource;
import java.util.List;

public class entertainmentDAO {
    private final JdbcTemplate jdbctemplate;

    public entertainmentDAO(DataSource dataSource){
        jdbctemplate = new JdbcTemplate(dataSource);
    }

    public List<entertainmentdetail> getSummaryList(){
        return jdbctemplate.query(
                "SELECT id, name, address, photo_path FROM entertainment",
                summaryRowmapper()
        );
    }

    public List<entertainmentdetail> getSummaryList(String gernename){
        return jdbctemplate.query(
                "SELECT id, name, address, photo_path FROM entertainment WHERE gernename = ?",
                summaryRowmapper(), gernename
        );
    }

    private RowMapper<entertainmentdetail> summaryRowmapper(){
        return(rs, rowNum) -> {
            entertainmentdetail object = new entertainmentdetail();
            object.setId(rs.getString("id"));
            object.setName(rs.getString("name"));
            object.setExplnation(rs.getString("address"));
            object.setPhotopath(rs.getString("photo_path"));
            return object;
        };
    }

    public int getTotallistnum(){
        return jdbctemplate.queryForObject(
                "SELECT count(*) FROM entertainment",Integer.class
        );
    }

    public int getTotallistnum(String gernename){
        return jdbctemplate.queryForObject(
                "SELECT count(*) FROM entertainment WHERE gernename = ?",Integer.class ,gernename
        );
    }

}
