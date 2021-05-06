package com.example.springboot.component;

import com.example.springboot.html.*;
import com.example.springboot.model.Project;
import com.example.springboot.model.Statement;

public class ArticleProjectComponent extends HtmlTag {

    private final Project project;
    private final boolean isFull;

    public ArticleProjectComponent(Project project, boolean isFull) {
        super("div");
        this.project = project;
        this.isFull = isFull;
    }

    @Override
    public String toString() {
        addContent(article(project));
        return super.toString();
    }

    private HtmlTag article(Project project) {
        HtmlTag article = new HtmlTag("article");
        article.clazz("box").clazz(project.getStatus().clazz());
        Row row = (Row) article.createContent(new Row());
        HtmlTag header = row.column("col-md-10")
                .with(new H(5)
                        .clazz("status-text")
                        .clazz(project.getStatus().clazz())
                        .with(project.getPhase().getLabel()));
        if (isFull) {
            header.with(new H(3)
                    .with(new AHref(resolve(project.getUrl()), project.getTitle())));
        }
        row.column("col-md-2 text-right")
                .with(statusText(project.getStatus().label(), project.getStatus().clazz()));
        Row content = (Row) article.createContent(new Row());
        HtmlTag cardContent = null;
        if (!isFull) {
            cardContent = content.column("col-md-12");
        }
        else if (project.getIcon() == null) {
            cardContent = content.column("col-md-12").with(new Div("project-description").with(project.getDescription()));
        } else {
            content.column("col-md-3").with(new Img(project.getIcon().getSource(), project.getIcon().getTitle()).clazz("card-img"));
            cardContent = content.column("col-md-9").with(new Div("project-description").with(project.getDescription()));
        }
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
