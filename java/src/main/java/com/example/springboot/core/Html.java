package com.example.springboot.core;

public class Html extends HtmlTag{

    public Html(String lang) {
        super("html");
        addAttr("lang", lang);
    }


}
