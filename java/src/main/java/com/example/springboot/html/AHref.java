package com.example.springboot.html;

public class AHref extends HtmlTag {
    public AHref(String clazz, String href, HtmlTag content) {
        super("a");
        addAttr("class", clazz);
        addAttr("href", href);
        addContent(content);
    }

    public AHref(String href, String content) {
        this("", href, new HtmlNoTag(content));
    }
}
