package com.example.springboot.component;

import com.example.springboot.model.Budget;
import com.example.springboot.html.*;

import java.util.List;

public class ArticleBudgetListComponent extends HtmlTag {
    private final List<Budget> plan;

    public ArticleBudgetListComponent(List<Budget> plan) {
        super("div");
        this.plan = plan;
    }

    @Override
    public String toString() {
        plan.forEach(p -> addContent(article(p)));
        return super.toString();
    }

    private HtmlTag article(Budget plan) {
        HtmlTag article = new HtmlTag("article");
        article.addClass("budget box inwork");
        Div row = new Div("row");
        row.addContent(new Div("col-md-9").with(new H(3, null, plan.getTitle())));
        row.addContent(new Div("col-md-3 text-right")
            .with(new Span("muted", "rozpočet"))
            .with(new Span("amount", plan.getAmountOriginal().toString())));
        article.addContent(row);
        return article;
    }

    private HtmlTag amount(String title, String amount) {
        return new Div("col-md-3 text-right")
                .with(new Span("muted", title))
                .with(new Span("amount", amount));
    }

    private HtmlTag title() {
        return new Div("col-md-9").with(new H(3, "", "Rekonštrukcie ZŠ a MŠ"));
    }

    private HtmlTag subTitle() {
        return new Div("col-md-9")
                .with(new Strong().with("Revitalizácia športového areálu,  multifunkčného ihriska - I. fáza"))
                .with(new HtmlNoTag(" - "))
                .with(new Small().with("2020"));

    }
}
