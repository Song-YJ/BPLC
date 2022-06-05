package com.hd.BPLC.controller;

import com.hd.BPLC.domain.theme;
import com.hd.BPLC.domain.themeDetail;
import com.hd.BPLC.domain.tripsiteDetail;
import com.hd.BPLC.service.themeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;

@Controller
public class themeController {
    @Autowired
    themeService service;

    @GetMapping("/dao/theme")
    @ResponseBody
    public theme getTheme(@RequestParam(value="gernename")String gernename){
        theme result = service.getThemeinfo(gernename);

        return result;
    }

    @GetMapping("/dao/detail/theme")
    @ResponseBody
    public themeDetail getThemedetailcontroller(@RequestParam(value="filename")String filename){
        themeDetail result = service.getThemeDetail(filename);

        return result;
    }

    @GetMapping("/dao/search/theme")
    @ResponseBody
    public theme getThemeSearch(@RequestParam(value="gernename")String gernename, @RequestParam(value="searchdata")String searchdata){
        theme result = service.getThemeSearch(gernename, searchdata);

        return result;
    }

    /*private static final String BASE_DIR = System.getProperty("user.dir") + "\\bplc-vue\\src\\assets\\theme\\";

    @RequestMapping("dao/themeDetail/files")
    @GetMapping("/{name}")
    public ResponseEntity<InputStreamResource> getThemeShow(@PathVariable("name") String name) throws FileNotFoundException {
        HttpHeaders headers = new HttpHeaders();
        headers.add("content-disposition", "inline;filename=" + name);
        File file = new File(BASE_DIR + name);
        InputStreamResource resource = new InputStreamResource(new FileInputStream(file));

        return ResponseEntity.ok()
                .headers(headers)
                .contentLength(file.length())
                .contentType(MediaType.parseMediaType("application/pdf"))
                .body(resource);
    }*/
    /*public String themeShow(@RequestParam(value="filename")String filename) {
        //String path = "redirect:file:///" + "C:\\Users\\bmg12\\Desktop\\bplcdb\\guidebook\\guidebook\\"+filename+".pdf";
        String path = "redirect:http://www.naver.com";
        return path;
    }*/
}
