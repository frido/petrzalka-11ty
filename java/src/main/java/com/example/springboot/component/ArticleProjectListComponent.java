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
        article.clazz("box").clazz(project.getStatus().clazz());
        Row row = (Row) article.createContent(new Row());
                row.column("col-md-10")
                        .with(new H(5)
                                .clazz("status-text")
                                .clazz(project.getStatus().clazz())
                                .with(project.getPhase()))
                        .with(new H(3)
                                .with(new AHref(resolve(project.getUrl()), project.getTitle())));
                row.column("col-md-2 text-right")
                        .with(new Span("status-text", project.getStatus().label()).clazz(project.getStatus().clazz()));
        Row content = (Row) article.createContent(new Row());
        if (project.getIcon() != null) {
            content.column("col-md-3").with(new Img(project.getIcon().getSource(), project.getIcon().getTitle()).clazz("preview card-img"));
        }
        HtmlTag cardContent = content.column("col-md-9").createContent(new Div("card-text").with(project.getDescription()));
        HtmlTag sub = cardContent.createContent(new Div("sub"));

        project.getStatements().forEach(s -> sub.addContent(subArticle(s)));
        return article;
    }

    private String resolve(String url) {
        return PageHeader.POSTS + url + "/";
    }

    private HtmlTag subArticle(Statement statement) {
        return new Div("sub-row")
                .with(new AHref("", statement.getSource(), new Span("", statement.getTitle())))
                .with(new Span("status-text padding-right", statement.getStatusDescription()).clazz(statement.getStatus()))
                .with(new Span("muted", String.valueOf(statement.getDate())));
    }
}
