package com.example.springboot.page;

import com.example.springboot.component.Figure;
import com.example.springboot.component.PageHeader;
import com.example.springboot.component.Title;
import com.example.springboot.html.*;
import com.example.springboot.model.Image;
import com.example.springboot.model.Project;
import com.example.springboot.model.Statement;

public class ProjectDetailPage extends BasePage {

    private final Project project;

    public ProjectDetailPage(Project project) {
        this.project = project;
    }

    @Override
    public HtmlTag getContent() {
        Section root = new Section();
        root.addContent(new Title(project.getTitle()));
        root.addContent(article());
        root.addContent(gallery());
        root.addContent(new HtmlNoTag(project.getDescription()));
        return root;
    }

    private HtmlTag gallery() {
        HtmlTag gallery = new Div("gallery");
        for(Image image : project.getImages()) {
            gallery.with(new Figure(image.getSource()));
        }
        return gallery;
    }

    private HtmlTag article() {
        HtmlTag article = new HtmlTag("article");
        article.clazz("article box").clazz(project.getStatus().clazz());
        Row row = (Row) article.createContent(new Row());
        row.column("col-md-10")
                .with(new H(5)
                        .clazz("status-text")
                        .clazz(project.getStatus().clazz())
                        .with(project.getPhase()));

        row.column("col-md-2 text-right")
                .with(new Span("status-text", project.getStatus().label()).clazz(project.getStatus().clazz()));

        HtmlTag sub = article.createContent(new Div("sub"));

        project.getStatements().forEach(s -> sub.addContent(subArticle(s)));
        return article;
    }

    private HtmlTag subArticle(Statement statement) {
        return new Div("sub-row")
                .with(new AHref("", statement.getSource(), new Span("", statement.getTitle())))
                .with(new Span("status-text padding-right", statement.getStatusDescription()).clazz(statement.getStatus()))
                .with(new Span("muted", String.valueOf(statement.getDate())));
    }

    @Override
    public String getFileName() {
        return PageHeader.POSTS + project.getUrl() + "/index";
    }
}
