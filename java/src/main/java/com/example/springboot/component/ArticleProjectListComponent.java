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
        article.clazz("box").clazz(project.getStatus().name());
        HtmlTag row = new Div("row")
                .with(new Div("col-md-10")
                        .with(new H(5).clazz("status-text").clazz(project.getStatus().name()).with(project.getPhase()))
                        .with(new H(3).with(new AHref("/posts/" + project.getUrl() + "/", project.getTitle())))
                        )
                .with(new Div("col-md-2 text-right")
                        .with(new Span("status-text", project.getStatus().name()).clazz(project.getStatus().name())));
        article.addContent(row);
        HtmlTag content = article.createContent(new Div("row"));
        content.with(new Div("col-md-3").with(new Img("", "").clazz("preview card-img")));
        HtmlTag cardContent = new Div("card-text").with(project.getDescription());
        content.with(new Div("col-md-9").with(cardContent));
        HtmlTag sub = cardContent.createContent(new Div("sub"));

        project.getStatements().forEach(s -> sub.addContent(subArticle(s)));
        return article;
    }

    private HtmlTag subArticle(Statement statement) {
        return new Div("sub-row")
                .with(new AHref("", statement.getSource(), new Span("", statement.getTitle())))
                .with(new Span("status-text padding-right", statement.getStatusDescription()).clazz(statement.getStatus()))
                .with(new Span("muted", String.valueOf(statement.getDate())));
    }
}
