package com.example.springboot.core;

public class Section extends HtmlTag{

    public Section() {
        super("section");
        addAttr("class", "section");
    }
}
