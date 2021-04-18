package com.example.springboot.core;

public class Title extends HtmlTag{

    private final HtmlNoTag title;

    public Title(String title) {
        super("header");
        this.title = new HtmlNoTag(title);
    }

    @Override
    public String toString() {
        addContent(new H(1, "", title));
        return super.toString();
    }
}
