package com.example.springboot.html;

public class Span extends HtmlTag{

    public Span(String clazz) {
        super("span");
        addAttr("class", clazz);
    }

    public Span(String clazz, String content) {
        this(clazz);
        addContent(new HtmlNoTag(content));
    }
}