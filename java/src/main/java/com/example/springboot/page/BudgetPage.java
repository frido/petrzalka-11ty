package com.example.springboot.page;

import com.example.springboot.component.PageHeader;
import com.example.springboot.core.Amount;
import com.example.springboot.html.*;
import com.example.springboot.model.Budget;
import com.example.springboot.model.BudgetStatus;
import com.example.springboot.service.BudgetService;

import java.math.BigDecimal;
import java.util.Collection;
import java.util.List;
import java.util.Map;

public class BudgetPage extends BasePage {

    private final BudgetService budgetService;

    public BudgetPage(BudgetService budgetService) {
        super();
        this.budgetService = budgetService;
    }

    public HtmlTag getContent() {
        Div root = new Div("");
        root.addContent(budgets());
        return root;
    }

    private HtmlTag budgets() {
        Section plan = new Section();
        plan.with(article(2021));
        plan.with(article(2020));
        return plan;
    }

    private HtmlTag article(int year) {
        Map<BudgetStatus, List<Budget>> map = budgetService.getBudgetByYear(year);
        double rozpocet = map.values().stream().flatMap(Collection::stream).mapToDouble(x -> x.getAmountOriginal().doubleValue()).sum();
        HtmlTag article = new HtmlTag("article").clazz("budget-summary box").clazz(status(year));
        Row row = (Row) article.createContent(new Row());
        row.column("col-md-9").with(new H(2).with(new AHref(resolve(year), "Investicny plan na rok " + year)));
        row.column("col-md-3 text-right")
                .with(new Span("muted", "rozpocet"))
                .with(new Span("amount", Amount.of(new BigDecimal(rozpocet))));

        List<BudgetStatus> statusList = List.of(BudgetStatus.SUCCESS, BudgetStatus.INWORK, BudgetStatus.POSTPONE, BudgetStatus.ERROR);
        statusList.forEach(s -> article.with(statusRow(s, map.get(s))));
        return article;
    }

    private String resolve(int year) {
        return PageHeader.BUDGET + year + "/";
    }

    private String status(int year) {
        if (year == 2021) {
            return "inwork";
        }
        return "success";
    }

    private HtmlTag statusRow(BudgetStatus s, List<Budget> list) {
        double amount = 0;
        int count = 0;
        if (list != null) {
            amount = list.stream().mapToDouble(x -> x.getAmountReal().doubleValue()).sum();
            count = list.size();
        }

        if (list == null) {
            return new HtmlNoTag("");
        }

        Row row = new Row();
        row.column("col-md-4 text-success").with(s.name());
        row.column("col-md-4").with(String.valueOf(count));
        row.column("col-md-4 text-right")
                .with(new Span("muted", "aktuálne"))
                .with(new Span("amount", Amount.of(new BigDecimal(amount))));
        return row;
    }

    @Override
    public String getFileName() {
        return PageHeader.BUDGET + "index";
    }
}
