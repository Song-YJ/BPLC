package com.hd.BPLC.service;

import com.hd.BPLC.SpringConfig;
import com.hd.BPLC.domain.entertainmentdetail;
import com.hd.BPLC.domain.entertainmentlist;
import com.hd.BPLC.repository.entertainmentDAO;
import org.springframework.beans.factory.annotation.Autowired;

public class entertainmentService {
    entertainmentDAO dao;

    public entertainmentService(entertainmentDAO dao){
        this.dao = dao;
    }

    public entertainmentlist getlistinfo(String gernename){
        entertainmentlist result = new entertainmentlist();

        if(gernename.equals("all")){
            result.setTotallistnum(dao.getTotallistnum());
            result.setLists(dao.getSummaryList());
        }else{
            if(gernename.equals("indoor")){
                String dbgernename = "실내";
                result.setTotallistnum(dao.getTotallistnum(dbgernename));
                result.setLists(dao.getSummaryList(dbgernename));
            }else{
                String dbgernename = "실외";
                result.setTotallistnum(dao.getTotallistnum(dbgernename));
                result.setLists(dao.getSummaryList(dbgernename));
            }
        }

        return result;
    }

    public entertainmentdetail getdetail(String id){
        entertainmentdetail result = dao.getContentDetail(id);
        return result;
    }
}
