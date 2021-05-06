package com.example.springboot.component;

import com.example.springboot.core.Amount;
import com.example.springboot.model.Budget;
import com.example.springboot.html.*;
import com.example.springboot.model.BudgetStatus;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class ArticleBudgetListComponent extends HtmlTag {
    private List<Budget> plan;
    private Map<BudgetStatus, List<Budget>> budgetByYear;

    public ArticleBudgetListComponent(List<Budget> plan) {
        super("div");
        this.plan = plan;
    }

    public ArticleBudgetListComponent(Map<BudgetStatus, List<Budget>> budgetByYear) {
        super("div");
        this.budgetByYear = budgetByYear;
    }

    @Override
    public String toString() {
        if (plan != null) {
            plan.forEach(p -> addContent(article(p)));
        }
        if (budgetByYear != null) {
            budgetByYear.forEach((status, list) -> addContent(segment(status, list)));
        }
        return super.toString();
    }

    private HtmlTag segment(BudgetStatus status, List<Budget> list) {
        HtmlTag segment = new HtmlTag("section");
        HtmlTag row = segment.createContent(new Div("row status-text inwork"));
        row.with(new Div("col-md-2").with(status.getDecription() + " " + status.getIcon()));
        row.with(new Div("col-md-2").with(list.size() + "projektov"));
        row.with(new Div("col-md-4").with("Aktuálne výdavky: " + calculateCurrentAmount(list)));
        row.with(new Div("col-md-4").with("Plánované výdavky: " + calculatePlanedAmount(list)));
        segment.addContent(list.stream().map(this::article).collect(Collectors.toList()));
        return segment;
    }

    private String calculatePlanedAmount(List<Budget> list) {
        return "0";
    }

    private String calculateCurrentAmount(List<Budget> list) {
        return "0";
    }

    private HtmlTag article(Budget plan) {
        HtmlTag article = new HtmlTag("article");
        article.clazz("box").clazz(plan.getStatus().getClazz());
        Row row = new Row();
        row.column("col-md-9").with(new H(3, null, plan.getTitle()));
        row.column("col-md-3 text-right")
            .with(new Span("muted", "rozpočet"))
            .with(new Span("amount", Amount.of(plan.getAmountOriginal())));
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
