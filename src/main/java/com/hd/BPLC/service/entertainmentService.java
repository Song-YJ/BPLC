package com.hd.BPLC.service;

import com.hd.BPLC.SpringConfig;
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
            result.setTotallistnum(dao.getTotallistnum(gernename));
            result.setLists(dao.getSummaryList(gernename));
        }

        return result;
    }
}
