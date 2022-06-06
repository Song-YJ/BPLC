package com.hd.BPLC.service;

import com.hd.BPLC.domain.guidebook;
import com.hd.BPLC.domain.notice;
import com.hd.BPLC.repository.tripinfoRepository;

public class tripinfoService {
    tripinfoRepository repository;

    public tripinfoService(tripinfoRepository repository){
        this.repository = repository;
    }

    public guidebook getGuidebookinfo(){
        guidebook result = new guidebook();

        result.setTotallistnum(repository.getGuidebookTotallistnum());
        result.setLists(repository.getGuidebookDetail());

        return result;
    }

    public notice getNoticeinfo() {
        notice result = new notice();

        result.setTotallistnum(repository.getNoticeTotallistnum());
        result.setLists(repository.getNoticeDetail());

        return result;
    }

    public guidebook getGuidebookSearch(String gernename, String searchdata){
        guidebook result = new guidebook();

        if(gernename.equals("all") || gernename.equals("guidebook")) {
            result.setTotallistnum(repository.getGuidebookTotallistnum(gernename, searchdata));
            result.setLists(repository.getGuidebookSearch(gernename, searchdata));
            return result;
        }
        else {
            return null;
        }
    }

    public notice getNoticeSearch(String gernename, String searchdata){
        notice result = new notice();

        if(gernename.equals("all") || gernename.equals("notice")) {
            result.setTotallistnum(repository.getNoticeTotallistnum(gernename, searchdata));
            result.setLists(repository.getNoticeSearch(gernename, searchdata));
            return result;
        }
        else {
            return null;
        }
    }
}
