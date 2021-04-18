package com.example.springboot.core;

import com.example.springboot.core.HtmlTag;

public class AHref extends HtmlTag {
    public AHref(String clazz, String href, HtmlTag content) {
        super("a");
        addAttr("class", clazz);
        addAttr("href", href);
        addContent(content);
    }
}
