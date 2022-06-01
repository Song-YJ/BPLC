package com.hd.BPLC.domain;

public class guidebookDetail{
    private String id;
    private String name;
    private String explanation;
    private String photopath;
    private String filename;

    public guidebookDetail(String id, String name, String explanation, String photopath, String filename) {
        this.id = id;
        this.name = name;
        this.explanation = explanation;
        this.photopath = photopath;
        this.filename = filename;
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
}
