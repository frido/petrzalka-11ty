package com.example.springboot.component;

import com.example.springboot.html.*;
import com.example.springboot.model.Project;
import com.example.springboot.model.Statement;

import java.util.List;

public class ArticleProjectListComponent extends HtmlTag {

    private final List<Project> project;

    public ArticleProjectListComponent(List<Project> project) {
        super("div");
        this.project = project;
    }

    @Override
    public String toString() {
        project.forEach(p -> addContent(new ArticleProjectComponent(p, true)));
        return super.toString();
    }
}
