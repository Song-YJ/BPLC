package com.hd.BPLC.service;

import com.hd.BPLC.domain.theme;
import com.hd.BPLC.domain.tripsiteDetail;
import com.hd.BPLC.domain.tripsiteList;
import com.hd.BPLC.repository.tripsiteRepository;

public class tripsiteService {
    tripsiteRepository repository;

    public tripsiteService(tripsiteRepository repository){
        this.repository = repository;
    }

    public tripsiteList getEntertainlistinfo(String gernename){
        tripsiteList result = new tripsiteList("entertainment");

        if(gernename.equals("all")){
            result.setTotallistnum(repository.getTotallistnum("entertainment"));
            result.setLists(repository.getSummaryList("entertainment"));
        }else{
            if(gernename.equals("indoor")){
                String dbgernename = "실내";
                result.setTotallistnum(repository.getTotallistnum("entertainment", dbgernename));
                result.setLists(repository.getSummaryList("entertainment", dbgernename));
            }else{
                String dbgernename = "실외";
                result.setTotallistnum(repository.getTotallistnum("entertainment", dbgernename));
                result.setLists(repository.getSummaryList("entertainment", dbgernename));
            }
        }

        return result;
    }

    public tripsiteList getHotellistinfo(String gernename){
        tripsiteList result = new tripsiteList("hotel");

        if(gernename.equals("all")){
            result.setTotallistnum(repository.getTotallistnum("hotel"));
            result.setLists(repository.getSummaryList("hotel"));
        }else{
            if(gernename.equals("hotel")){
                String dbgernename = "호텔";
                result.setTotallistnum(repository.getTotallistnum("hotel", dbgernename));
                result.setLists(repository.getSummaryList("hotel", dbgernename));
            }else if(gernename.equals("hostel")) {
                String dbgernename = "호스텔";
                result.setTotallistnum(repository.getTotallistnum("hotel", dbgernename));
                result.setLists(repository.getSummaryList("hotel", dbgernename));
            }else if(gernename.equals("camping")){
                String dbgernename = "캠핑";
                result.setTotallistnum(repository.getTotallistnum("hotel", dbgernename));
                result.setLists(repository.getSummaryList("hotel", dbgernename));
            }else{
                String dbgernename = "펜션";
                result.setTotallistnum(repository.getTotallistnum("hotel", dbgernename));
                result.setLists(repository.getSummaryList("hotel", dbgernename));
            }
        }

        return result;
    }

    public tripsiteList getFoodlistinfo(String gernename){
        tripsiteList result = new tripsiteList("food");

        if(gernename.equals("all")){
            result.setTotallistnum(repository.getTotallistnum("food"));
            result.setLists(repository.getSummaryList("food"));
        }else{
            if(gernename.equals("restaurant")){
                String dbgernename = "음식점";
                result.setTotallistnum(repository.getTotallistnum("food", dbgernename));
                result.setLists(repository.getSummaryList("food", dbgernename));
            }else if(gernename.equals("market")) {
                String dbgernename = "시장";
                result.setTotallistnum(repository.getTotallistnum("food", dbgernename));
                result.setLists(repository.getSummaryList("food", dbgernename));
            }else if(gernename.equals("cafe")){
                String dbgernename = "카페, 디저트";
                result.setTotallistnum(repository.getTotallistnum("food", dbgernename));
                result.setLists(repository.getSummaryList("food", dbgernename));
            }else{
                String dbgernename = "베이커리";
                result.setTotallistnum(repository.getTotallistnum("food", dbgernename));
                result.setLists(repository.getSummaryList("food", dbgernename));
            }
        }

        return result;
    }

    public tripsiteList getSightlistinfo(String gernename){
        tripsiteList result = new tripsiteList("sight");

        if(gernename.equals("all")){
            result.setTotallistnum(repository.getTotallistnum("sight"));
            result.setLists(repository.getSummaryList("sight"));
        }else{
            if(gernename.equals("nature")){
                String dbgernename = "자연";
                result.setTotallistnum(repository.getTotallistnum("sight", dbgernename));
                result.setLists(repository.getSummaryList("sight", dbgernename));
            }else if(gernename.equals("landmark")) {
                String dbgernename = "랜드마크";
                result.setTotallistnum(repository.getTotallistnum("sight", dbgernename));
                result.setLists(repository.getSummaryList("sight", dbgernename));
            }else if(gernename.equals("culture")){
                String dbgernename = "문화";
                result.setTotallistnum(repository.getTotallistnum("sight", dbgernename));
                result.setLists(repository.getSummaryList("sight", dbgernename));
            }else{
                String dbgernename = "역사";
                result.setTotallistnum(repository.getTotallistnum("sight", dbgernename));
                result.setLists(repository.getSummaryList("sight", dbgernename));
            }
        }

        return result;
    }

    public tripsiteDetail getdetail(String tablename, String id){
        tripsiteDetail result = repository.getContentDetail(tablename, id);
        return result;
    }

    public int updateLikesSev(String tablename, String id){
        int result = repository.updateLikesRep(tablename, id);
        return result;
    }

    public int updateLikesCancelSev(String tablename, String id){
        int result = repository.updateLikesCancelRep(tablename, id);
        return result;
    }

    public tripsiteList getTripsiteSearch(String gernename, String searchdata){
        tripsiteList result = new tripsiteList();

        if(gernename.equals("all") || gernename.equals("tripsite")){
            result.setTotallistnum(repository.getTripsiteSearchTotallistnum(gernename, searchdata));
            result.setLists(repository.getTripsiteSearchList(gernename, searchdata));

            return result;
        }
        else {
            return null;
        }
    }
}
