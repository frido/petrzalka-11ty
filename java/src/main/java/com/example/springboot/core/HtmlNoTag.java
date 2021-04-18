package com.example.springboot.core;

import java.util.ArrayList;
import java.util.List;

public class HtmlNoTag extends HtmlTag {
    private final String text;

    public HtmlNoTag(String text) {
        super(null);
        this.text = text;
    }

    @Override
    public String toString() {
        return text;
    }

}
