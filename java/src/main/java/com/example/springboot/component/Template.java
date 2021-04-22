package com.example.springboot.component;

import com.example.springboot.component.Head;
import com.example.springboot.component.PageHeader;
import com.example.springboot.html.Html;
import com.example.springboot.html.HtmlTag;

public class Template {

    private HtmlTag content;

    public void setContent(HtmlTag content) {
        this.content = content;
    }

    @Override
    public String toString() {
        Html html = new Html("sk");
        html.addContent(new Head());
        HtmlTag body = new HtmlTag("body");
        body.addContent(new PageHeader());
        body.addContent(content);
        html.addContent(body);
        return html.toString();
    }
}
