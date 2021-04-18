package com.example.springboot;

import com.example.springboot.core.*;

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
