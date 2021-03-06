package com.hd.BPLC.service;

import com.hd.BPLC.domain.theme;
import com.hd.BPLC.domain.themeDetail;
import com.hd.BPLC.repository.themeRepository;

public class themeService {
    themeRepository repository;

    public themeService(themeRepository repository){
        this.repository = repository;
    }

    public theme getThemeinfo(String gernename){
        theme result = new theme();

        if(gernename.equals("all")){
            String dbgernename = "등록순";
            result.setTotallistnum(repository.getThemeTotallistnum(dbgernename));
            result.setLists(repository.getThemeSummaryList(dbgernename));
        }else{
            if(gernename.equals("Korean")){
                String dbgernename = "가나다순";
                result.setTotallistnum(repository.getThemeTotallistnum(dbgernename));
                result.setLists(repository.getThemeSummaryList(dbgernename));
            }else{
                String dbgernename = "조회순";
                result.setTotallistnum(repository.getThemeTotallistnum(dbgernename));
                result.setLists(repository.getThemeSummaryList(dbgernename));
            }
        }

        return result;
    }

    public themeDetail getThemeDetail(String filename){
        themeDetail result = repository.getThemeContentDetail(filename);
        return result;
    }

    public theme getThemeSearch(String gernename, String searchdata){
        theme result = new theme();

        if(gernename.equals("all") || gernename.equals("theme")) {
            result.setTotallistnum(repository.getThemeSearchTotallistnum(gernename, searchdata));
            result.setLists(repository.getThemeSearch(gernename, searchdata));
            return result;
        }
        else {
            result.setTotallistnum(repository.getThemeSearchTotallistnum(gernename, searchdata));
            return result;
        }
    }
}
