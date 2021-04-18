package com.example.springboot.core;

public class MetaProperty extends HtmlTag{

    public MetaProperty(String name, String property) {
        super("meta");
        addAttr("name", name);
        addAttr("property", property);
    }


}
