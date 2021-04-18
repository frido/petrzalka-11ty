package com.example.springboot.core;

public class ArticleProject extends HtmlTag{

    private final Project project;

    public ArticleProject(Project project) {
        super("article");
        this.project = project;
    }

    @Override
    public String toString() {
        addClass("execution box inwork");
        Div row = new Div("row");
        addContent(row);
        row
                .with(new Div("col-md-10")
                        .with(new H(5, "status-text inwork", "Príprava projektu")
                        .with(new H(3,"", new AHref("", "/posts/lavky_cez_chorvatske_rameno/", new HtmlNoTag("Lávky cez Chorvátske rameno"))))
                        )
                .with(new Div("col-md-2 text-right")
                        .with(new Span("status-text inwork", "prebieha"))));
        Div sub = new Div("sub");
        addContent(sub);
        Div row2 = new Div("row");
        sub.addContent(row2);
        row2.with(
                new Div("col-md-8")
                        .with(new AHref("", "...", new Span("padding-right", "Súťaž")))
                        .with(new Span("", "11.02.2021")));
        row2.with(new Div("col-md-4 text-right")
                        .with(new Span("status-text inwork", "prebieha")));
        return super.toString();
    }
}
