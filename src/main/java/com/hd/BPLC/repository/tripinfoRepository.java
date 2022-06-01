package com.hd.BPLC.repository;


import com.hd.BPLC.domain.guidebookDetail;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import javax.sql.DataSource;
import java.util.List;

public class tripinfoRepository {
    private final JdbcTemplate jdbctemplate;

    public tripinfoRepository(DataSource dataSource){
        jdbctemplate = new JdbcTemplate(dataSource);
    }

    public List<guidebookDetail> getGuidebookDetail(){
        return jdbctemplate.query(
                "SELECT * FROM guidebook",
                guidebookDetailRowmapper()
        );
    }

    private RowMapper<guidebookDetail> guidebookDetailRowmapper() {
        return(rs, rowNum) -> {
            String id = rs.getString("id");
            String name = rs.getString("name");
            String explanation = rs.getString("explanation");
            String photopath = rs.getString("photopath");
            String filename = rs.getString("filename");

            guidebookDetail object = new guidebookDetail(id, name, explanation, photopath, filename);

            return object;
        };
    }

    public int getGuidebookTotallistnum(){
        return jdbctemplate.queryForObject(
                "SELECT count(*) FROM guidebook",Integer.class
        );
    }
}
