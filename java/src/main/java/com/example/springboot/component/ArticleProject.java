package com.example.springboot.component;

import com.example.springboot.html.*;
import com.example.springboot.model.Project;

import java.util.List;

public class ArticleProject extends HtmlTag {

    private final List<Project> project;

    public ArticleProject(List<Project> project) {
        super("div");
        this.project = project;
    }

    @Override
    public String toString() {
        project.forEach(p -> addContent(article(p)));
        return super.toString();
    }

    private HtmlTag article(Project project) {
        HtmlTag article = new HtmlTag("article");
        article.addClass("execution box inwork");
        Div row = new Div("row");
        article.addContent(row);
        row
                .with(new Div("col-md-10")
                        .with(new H(5, "status-text inwork", "Príprava projektu")
                        .with(new H(3,"", new AHref("", "/posts/lavky_cez_chorvatske_rameno/", new HtmlNoTag(project.getTitle()))))
                        ))
                .with(new Div("col-md-2 text-right")
                        .with(new Span("status-text inwork", "prebieha")));
        Div sub = new Div("sub");
        article.addContent(sub);
        Div row2 = new Div("row");
        sub.addContent(row2);
        row2.with(
                new Div("col-md-8")
                        .with(new AHref("", "...", new Span("padding-right", "Súťaž")))
                        .with(new Span("", "11.02.2021")));
        row2.with(new Div("col-md-4 text-right")
                        .with(new Span("status-text inwork", "prebieha")));
        return article;
    }
}
