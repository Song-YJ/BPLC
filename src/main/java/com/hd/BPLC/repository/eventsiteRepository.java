package com.hd.BPLC.repository;

import com.hd.BPLC.domain.eventsiteDetail;
import com.hd.BPLC.domain.searchEvent;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import javax.sql.DataSource;
import java.util.List;

public class eventsiteRepository {
    private final JdbcTemplate jdbctemplate;

    public eventsiteRepository(DataSource dataSource){
        jdbctemplate = new JdbcTemplate(dataSource);
    }

    public List<eventsiteDetail> getSummaryList(String tablename, String gernename){
        return jdbctemplate.query(
                "SELECT id, name, start_date, end_date, photo_path FROM " + tablename + " WHERE " + tablename + ".type = ?",
                summaryRowmapper(), gernename
        );
    }

    public eventsiteDetail getContentDetail(String tablename, String id) {
        return jdbctemplate.queryForObject(
                "SELECT * FROM " + tablename + " WHERE id = ?",
                detailRowmapper(tablename), id
        );
    }

    public int changeType1(String curdate, String tablename){
        return jdbctemplate.update(
                "UPDATE " + tablename + " SET " + tablename + ".type = \'진행종료\' WHERE end_date < \'" + curdate + "\'"
        );
    }

    public int changeType2(String curdate, String tablename){
        return jdbctemplate.update(
                "UPDATE " + tablename + " SET " + tablename + ".type = \'진행중\' WHERE start_date < \'" + curdate + "\' AND end_date > \'" + curdate + "\'"
        );
    }

    //검색 결과
    public List<searchEvent> getEventSearch(String gernename, String searchdata){
        if(gernename.equals("all") || gernename.equals("event")) {
            return jdbctemplate.query(
                    "SELECT id, name, start_date, end_date, photo_path, \'exhibition\' AS category FROM exhibition WHERE name LIKE \'%" + searchdata + "%\' OR start_date LIKE \'%" + searchdata + "%\' OR end_date LIKE \'%" + searchdata + "%\'" +
                    "UNION SELECT id, name, start_date, end_date, photo_path, \'festival\' AS category FROM festival WHERE name LIKE \'%" + searchdata + "%\' OR start_date LIKE \'%" + searchdata + "%\' OR end_date LIKE \'%" + searchdata + "%\'",
                    summarySearchRowmapper()
            );
        }
        else {
            return null;
        }
    }

    private RowMapper<eventsiteDetail> summaryRowmapper(){
        return(rs, rowNum) -> {
            eventsiteDetail object = new eventsiteDetail();
            object.setId(rs.getString("id"));
            object.setName(rs.getString("name"));
            object.setStartdate(rs.getString("start_date"));
            object.setEnddate(rs.getString("end_date"));
            object.setPhotopath(rs.getString("photo_path"));

            object.setExplanation();

            return object;
        };
    }

    private RowMapper<eventsiteDetail> detailRowmapper(String tablename) {
        return(rs, rowNum) -> {
            eventsiteDetail object = new eventsiteDetail();
            object.setId(rs.getString("id"));
            object.setName(rs.getString("name"));
            object.setStartdate(rs.getString("start_date"));
            object.setEnddate(rs.getString("end_date"));
            object.setEntryfee(rs.getString("entryfee"));
            object.setAddress(rs.getString("address"));
            object.setPhotopath(rs.getString("photo_path"));
            object.setPhone(rs.getString("phone"));
            object.setDetail(rs.getString("detail"));
            object.setHomepage(rs.getString("homepage"));
            object.setOper_time(rs.getString("oper_time"));
            object.setHoliday(rs.getString("holiday"));

            object.setExplanation();


            return object;
        };
    }

    private RowMapper<searchEvent> summarySearchRowmapper(){
        return(rs, rowNum) -> {
            searchEvent object = new searchEvent();
            object.setId(rs.getString("id"));
            object.setName(rs.getString("name"));
            object.setStartdate(rs.getString("start_date"));
            object.setEnddate(rs.getString("end_date"));
            object.setPhotopath(rs.getString("photo_path"));
            object.setCategory(rs.getString("category"));

            return object;
        };
    }

    public int getTotallistnum(String tablename, String gernename){
        return jdbctemplate.queryForObject(
                "SELECT count(*) FROM " + tablename + " WHERE " + tablename + ".type = ?",Integer.class, gernename
        );
    }

    public int getEventSearchTotallistnum(String gernename, String searchdata){
        return jdbctemplate.queryForObject(
                "SELECT((SELECT count(*) FROM exhibition WHERE name LIKE \'%" + searchdata + "%\' OR start_date LIKE \'%" + searchdata + "%\' OR end_date LIKE \'%" + searchdata + "%\') + " +
                        "(SELECT count(*) FROM festival WHERE name LIKE \'%" + searchdata + "%\' OR start_date LIKE \'%" + searchdata + "%\' OR end_date LIKE \'%" + searchdata + "%\'))",
                Integer.class
        );
    }
}
