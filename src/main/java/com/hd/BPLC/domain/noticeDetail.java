package com.hd.BPLC.domain;

public class noticeDetail {
    private int No;
    private String title;
    private String writeday;
    private String contents;

    public noticeDetail(int No, String title, String writeday, String contents) {
        this.No = No;
        this.title = title;
        this.writeday = writeday;
        this.contents = contents;
    }

    public String getContents() {
        return contents;
    }

    public void setContents(String contents) {
        this.contents = contents;
    }

    public int getNo() {
        return No;
    }

    public void setNo(int No) {
        this.No = No;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getWriteday() {
        return writeday;
    }

    public void setWriteday(String writeday) {
        this.writeday = writeday;
    }
}
