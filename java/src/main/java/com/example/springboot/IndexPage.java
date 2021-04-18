package com.example.springboot;

import com.example.springboot.core.*;

public class IndexPage implements Page {

    @Override
    public String toString() {
        Template template = new Template();
        template.setContent(getContent());
        return template.toString();
    }

    private HtmlTag getContent() {
        Div root = new Div("");
        Section section = new Section();
        section.addContent(new Title("Časová os projektov"));
        section.addContent(new ArticleProject(new Project()));
        root.addContent(section);
        return root;
    }

    @Override
    public String getFileName() {
        return "index";
    }
}
