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
        HtmlTag row = new Div("row")
                .with(new Div("col-md-10")
                        .with(new H(5, "status-text inwork", "Príprava projektu"))
                        .with(new H(3,"", new AHref("", "/posts/" + project.getUrl() + "/", new HtmlNoTag(project.getTitle()))))
                        )
                .with(new Div("col-md-2 text-right")
                        .with(new Span("status-text inwork", "prebieha")));
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
                .with(new AHref("", statement.getSource(), new Span("padding-right", statement.getTitle())))
                .with(new Span("status-text inwork padding-right", statement.getStatusDescription()))
                .with(new Span("muted", String.valueOf(statement.getDate())));
    }
}