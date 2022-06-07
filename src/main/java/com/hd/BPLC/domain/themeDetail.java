package com.hd.BPLC.domain;

public class themeDetail {
    private String id;
    private String name;
    private String explanation;
    private String photopath;
    private String filename;
    private Integer likes;
    private String category = "theme";

    public themeDetail(String id, String name, String explanation, String photopath, String filename, Integer likes) {
        this.id = id;
        this.name = name;
        this.explanation = explanation;
        this.photopath = photopath;
        this.filename = filename;
        this.likes = likes;
        this.category = "theme";
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getExplanation() {
        return explanation;
    }

    public void setExplanation(String explanation) {
        this.explanation = explanation;
    }

    public String getPhotopath() {
        return photopath;
    }

    public void setPhotopath(String photopath) {
        this.photopath = photopath;
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public Integer getLikes() {
        return likes;
    }

    public void setLikes(Integer likes) {
        this.likes = likes;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
