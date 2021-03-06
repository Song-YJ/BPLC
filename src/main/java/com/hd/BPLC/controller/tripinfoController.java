package com.hd.BPLC.controller;

import com.hd.BPLC.domain.guidebook;
import com.hd.BPLC.domain.notice;
import com.hd.BPLC.service.tripinfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.File;
import java.io.IOException;
import java.net.URLEncoder;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class tripinfoController {
    @Autowired
    tripinfoService service;

    @GetMapping("/download/guidebook")
    public void downloadGuidebook(@RequestParam(value="filename")String filename, HttpServletResponse response) throws IOException {
        //String path = "C:\\Users\\송유진\\Desktop\\deu\\4-1\\캡스톤디자인\\BPLC\\guidebook\\" + filename + ".pdf";
        String path = "C:\\Users\\bmg12\\Desktop\\bplcdb\\guidebook\\guidebook\\" + filename + ".pdf";
        //String path;

        byte[] fileByte = FileUtils.readFileToByteArray(new File(path));

        response.setContentType("application/octet-stream");
        response.setHeader("Content-Disposition","attachment; fileName=" + URLEncoder.encode(filename + ".pdf", "UTF-8") + ";");
        response.setHeader("Content-Transfer-Encoding", "binary");

        response.getOutputStream().write(fileByte);
        response.getOutputStream().flush();
        response.getOutputStream().close();
    }

    @GetMapping("/dao/guidebook")
    @ResponseBody
    public guidebook getGuidebook(){
        guidebook result = service.getGuidebookinfo();

        return result;
    }

    @GetMapping("/dao/notice")
    @ResponseBody
    public notice getNotice(){
        notice result = service.getNoticeinfo();

        return result;
    }

    @GetMapping("/dao/search/guidebook")
    @ResponseBody
    public guidebook getGuidebookSearch(@RequestParam(value="gernename")String gernename, @RequestParam(value="searchdata")String searchdata){
        guidebook result = service.getGuidebookSearch(gernename, searchdata);

        return result;
    }

    @GetMapping("/dao/search/notice")
    @ResponseBody
    public notice getNoticeSearch(@RequestParam(value="gernename")String gernename, @RequestParam(value="searchdata")String searchdata){
        notice result = service.getNoticeSearch(gernename, searchdata);

        return result;
    }
}
