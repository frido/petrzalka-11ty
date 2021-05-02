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
                        .with(new H(3,"", new AHref("", "/posts/" + project.getUrl() + "/", new HtmlNoTag(project.getTitle()))))
                        ))
                .with(new Div("col-md-2 text-right")
                        .with(new Span("status-text inwork", "prebieha")));
        Div sub = new Div("sub");
        article.addContent(sub);
        project.getStatements().forEach(s -> sub.addContent(subArticle(s)));
        return article;
    }

    private HtmlTag subArticle(Statement statement) {
        Div row2 = new Div("row");
        row2.with(
                new Div("col-md-8")
                        .with(new AHref("", statement.getSource(), new Span("padding-right", statement.getTitle())))
                        .with(new Span("muted", String.valueOf(statement.getDate()))));
        row2.with(new Div("col-md-4 text-right")
                        .with(new Span("status-text inwork", statement.getStatusDescription())));
        return row2;
    }
}
