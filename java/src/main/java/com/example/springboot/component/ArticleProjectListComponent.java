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
                                .with(project.getPhase().getLabel()))
                        .with(new H(3)
                                .with(new AHref(resolve(project.getUrl()), project.getTitle())));
                row.column("col-md-2 text-right")
                        .with(statusText(project.getStatus().label(), project.getStatus().clazz()));
        Row content = (Row) article.createContent(new Row());
        if (project.getIcon() != null) {
            content.column("col-md-3").with(new Img(project.getIcon().getSource(), project.getIcon().getTitle()).clazz("card-img"));
        }
        HtmlTag cardContent = content.column("col-md-9").createContent(new Div("").with(project.getDescription()));
        HtmlTag statementList = cardContent.createContent(new Div("statement-list"));

        project.getStatements().forEach(s -> statementList.addContent(statement(s)));
        return article;
    }

    private String resolve(String url) {
        return PageHeader.POSTS + url + "/";
    }

    private HtmlTag statement(Statement statement) {
        HtmlTag row = new Div("statement-row");
        row.with(new AHref("", statement.getSource(), new Span("", statement.getTitle())));
        if (statement.getStatusDescription() != null && !statement.getStatusDescription().isBlank()) {
            row.with(statusText(statement.getStatusDescription(), statement.getStatus()));
        }
        row.with(new Span("muted", String.valueOf(statement.getDate())));
        return row;
    }

    private HtmlTag statusText(String text, String clazz) {
        return new Span("status-text", text).clazz(clazz);
    }
}
