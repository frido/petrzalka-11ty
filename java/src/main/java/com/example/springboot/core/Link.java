package com.example.springboot.core;

public class Link extends HtmlTag{

    public Link(String href, String rel) {
        super("link");
        addAttr("rel", rel);
        addAttr("href", href);
    }


}
