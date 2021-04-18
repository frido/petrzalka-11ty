package com.example.springboot.core;

public class Header extends HtmlTag{

    public Header(String clazz) {
        super("header");
        addAttr("class", clazz);
    }
}
