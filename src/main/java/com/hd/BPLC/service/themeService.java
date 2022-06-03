package com.hd.BPLC.service;

import com.hd.BPLC.domain.theme;
import com.hd.BPLC.domain.themeDetail;
import com.hd.BPLC.domain.tripsiteDetail;
import com.hd.BPLC.repository.themeRepository;

public class themeService {
    themeRepository repository;

    public themeService(themeRepository repository){
        this.repository = repository;
    }

    public theme getThemeinfo(String gernename){
        theme result = new theme();

        if(gernename.equals("all")){
            String dbgernename = "all";
            result.setTotallistnum(repository.getThemeTotallistnum());
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
}
