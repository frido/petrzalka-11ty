package com.example.springboot.core;

public class Div extends HtmlTag{

    public Div(String clazz) {
        super("div");
        addAttr("class", clazz);
    }

    public Div(String clazz, HtmlTag content) {
        this(clazz);
        addContent(content);
    }
}
