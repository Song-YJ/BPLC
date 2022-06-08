package com.hd.BPLC.repository;

import com.hd.BPLC.domain.themeDetail;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import javax.sql.DataSource;
import java.util.List;

public class themeRepository {
    private final JdbcTemplate jdbctemplate;

    public themeRepository(DataSource dataSource){
        jdbctemplate = new JdbcTemplate(dataSource);
    }

    //모든 코스 가져오기
    public List<themeDetail> getThemeSummaryList(){
        return jdbctemplate.query(
                "SELECT * FROM theme_courses",
                summaryRowmapper()
        );
    }

    //가나다순이나 조회순으로 정렬하기
    public List<themeDetail> getThemeSummaryList(String gernename){
        String sortmethod;

        if(gernename == "가나다순")
            sortmethod = "name ASC";
        else if(gernename == "등록순")
            sortmethod = "id ASC";
        else
            sortmethod = "likes DESC";

        return jdbctemplate.query(
                "SELECT * FROM theme_course ORDER BY " + sortmethod,
                summaryRowmapper()
        );
    }

    //테마별 디테일
    public themeDetail getThemeContentDetail(String filename){
        return jdbctemplate.queryForObject(
                "SELECT * FROM theme_course WHERE filename = ?",
                detailRowmapper(), filename
        );
    }

    //검색 결과
    public List<themeDetail> getThemeSearch(String gernename, String searchdata){
        if(gernename.equals("all") || gernename.equals("theme")) {
            return jdbctemplate.query(
                    "SELECT *, 'theme' AS category FROM theme_course WHERE name LIKE \'%" + searchdata + "%\' OR explanation LIKE \'%" + searchdata + "%\'",
                    summaryRowmapper()
            );
        }
        else {
            return null;
        }
    }

    private RowMapper<themeDetail> detailRowmapper() {
        return(rs, rowNum) -> {
            String id = rs.getString("id");
            String name = rs.getString("name");
            String explanation = rs.getString("explanation");
            String photopath = rs.getString("photo_path");
            String filename = rs.getString("filename");
            Integer likes = rs.getInt("likes");

            themeDetail object = new themeDetail(id, name, explanation, photopath, filename, likes);

            return object;
        };
    }

    private RowMapper<themeDetail> summaryRowmapper(){
        return(rs, rowNum) -> {
            String id = rs.getString("id");
            String name = rs.getString("name");
            String explanation = rs.getString("explanation");
            String photopath = rs.getString("photo_path");
            String filename = rs.getString("filename");
            Integer likes = rs.getInt("likes");

            themeDetail object = new themeDetail(id, name, explanation, photopath, filename, likes);

            return object;
        };
    }

    //조건 없을때 리스트 개수
    public int getThemeTotallistnum(){
        return jdbctemplate.queryForObject(
                "SELECT count(*) FROM theme_course",Integer.class
        );
    }

    //정렬 조건 있을떄 리스트 개수
    public int getThemeTotallistnum(String gernename){
        return jdbctemplate.queryForObject(
                "SELECT count(*) FROM theme_course", Integer.class
        );
    }

    public int getThemeSearchTotallistnum(String gernename, String searchdata){
        return jdbctemplate.queryForObject(
                "SELECT count(*) FROM theme_course WHERE name LIKE \'%" + searchdata + "%\' OR explanation LIKE \'%" + searchdata + "%\'",
                Integer.class
        );
    }
}
