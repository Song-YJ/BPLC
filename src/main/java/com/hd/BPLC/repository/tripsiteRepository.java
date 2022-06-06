package com.hd.BPLC.repository;

import com.hd.BPLC.domain.tripsiteDetail;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import javax.sql.DataSource;
import java.util.List;

public class tripsiteRepository {
    private final JdbcTemplate jdbctemplate;

    public tripsiteRepository(DataSource dataSource){
        jdbctemplate = new JdbcTemplate(dataSource);
    }

    public List<tripsiteDetail> getSummaryList(String tablename){
        return jdbctemplate.query(
                "SELECT id, name, address, photo_path FROM " + tablename,
                summaryRowmapper()
        );
    }

    public List<tripsiteDetail> getSummaryList(String tablename, String gernename){
        return jdbctemplate.query(
                "SELECT id, name, address, photo_path FROM " + tablename + " WHERE " + tablename + ".type = ?",
                summaryRowmapper(), gernename
        );
    }

    public List<tripsiteDetail> getTripsiteSearchList(String gernename, String searchdata){
        if(gernename.equals("all") || gernename.equals("tripsite")){
            return jdbctemplate.query(
                    "SELECT id, name, address, photo_path FROM sight WHERE name LIKE \'%" + searchdata + "%\' or address LIKE \'%" + searchdata + "%\' + " +
                            "UNION SELECT id, name, address, photo_path FROM food WHERE name LIKE \'%" + searchdata + "%\' or address LIKE \'%" + searchdata + "%\' +" +
                            "UNION SELECT id, name, address, photo_path FROM hotel WHERE name LIKE \'%" + searchdata + "%\' or address LIKE \'%" + searchdata + "%\' +" +
                            "UNION SELECT id, name, address, photo_path FROM entertainment WHERE name LIKE \'%" + searchdata + "%\' or address LIKE \'%" + searchdata + "%\'",
                    summaryRowmapper()
            );
        }
        else {
            return null;
        }
    }

    public tripsiteDetail getContentDetail(String tablename, String id){
        return jdbctemplate.queryForObject(
                "SELECT * FROM " + tablename + " WHERE id = ?",
                detailRowmapper(tablename), id
        );
    }

    private RowMapper<tripsiteDetail> detailRowmapper(String tablename) {
        return(rs, rowNum) -> {
            tripsiteDetail object = new tripsiteDetail();
            object.setId(rs.getString("id"));
            object.setName(rs.getString("name"));
            object.setExplanation(rs.getString("address"));
            object.setPhotopath(rs.getString("photo_path"));
            object.setPhone(rs.getString("phone"));
            object.setDetail(rs.getString("detail"));
            object.setHomepage(rs.getString("homepage"));

            if(!tablename.equals("hotel")){
                object.setOper_time(rs.getString("oper_time"));
                object.setHoliday(rs.getString("holiday"));
            }

            if(tablename.equals("sight")){
                object.setEntryfee(rs.getString("entryfee"));
            }

            return object;
        };
    }

    private RowMapper<tripsiteDetail> summaryRowmapper(){
        return(rs, rowNum) -> {
            tripsiteDetail object = new tripsiteDetail();
            object.setId(rs.getString("id"));
            object.setName(rs.getString("name"));
            object.setExplanation(rs.getString("address"));
            object.setPhotopath(rs.getString("photo_path"));

            return object;
        };
    }

    public int getTotallistnum(String tablename){
        return jdbctemplate.queryForObject(
                "SELECT count(*) FROM " + tablename,Integer.class
        );
    }

    public int getTotallistnum(String tablename, String gernename){
        return jdbctemplate.queryForObject(
                "SELECT count(*) FROM " + tablename + " WHERE " + tablename + ".type = ?",Integer.class, gernename
        );
    }

    public int updateLikesRep(String tablename, String id){
        return jdbctemplate.update(
                "UPDATE " + tablename + " SET likes = likes + 1 WHERE id = \'" + id + "\'"
        );
    }

    public int updateLikesCancelRep(String tablename, String id){
        return jdbctemplate.update(
                "UPDATE " + tablename + " SET likes = likes - 1 WHERE id = \'" + id + "\'"
        );
    }

    public int getTripsiteSearchTotallistnum(String gernename, String searchdata){
        if(gernename.equals("all") || gernename.equals("tripsite")){
            return jdbctemplate.queryForObject(
                    "SELECT((SELECT count(*) FROM sight WHERE name LIKE \'%" + searchdata + "%\' or address LIKE \'%" + searchdata + "%\') + " +
                            "(SELECT count(*) FROM food WHERE name LIKE \'%" + searchdata + "%\' or address LIKE \'%" + searchdata + "%\') + " +
                            "(SELECT count(*) FROM hotel WHERE name LIKE \'%" + searchdata + "%\' or address LIKE \'%" + searchdata + "%\') + " +
                            "(SELECT count(*) FROM entertainment WHERE name LIKE \'%" + searchdata + "%\' or address LIKE \'%" + searchdata + "%\'))",
                    Integer.class
            );
        }
        else {
            return 0;
        }
    }
}
