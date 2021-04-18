package com.example.springboot.core;

import com.example.springboot.core.HtmlNoTag;
import com.example.springboot.core.HtmlTag;

public class H extends HtmlTag {
    public H(int header, String clazz, String content) {
        super("h" + header);
        addAttr("class", clazz);
        addContent(new HtmlNoTag(content));
    }

    public H(int header, String clazz, HtmlTag content) {
        super("h" + header);
        addAttr("class", clazz);
        addContent(content);
    }
}
