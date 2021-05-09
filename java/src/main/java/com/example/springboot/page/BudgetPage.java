package com.example.springboot.page;

import com.example.springboot.component.PageHeader;
import com.example.springboot.component.Title;
import com.example.springboot.core.Amount;
import com.example.springboot.html.*;
import com.example.springboot.model.Budget;
import com.example.springboot.model.BudgetStatus;
import com.example.springboot.service.BudgetByYearDto;
import com.example.springboot.service.BudgetListDto;
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
        Section root = new Section();
        root.addContent(new Title("Investičné plány"));
        root.with(article(2021));
        root.with(article(2020));
        return root;
    }

    private HtmlTag article(int year) {
        BudgetByYearDto plan = budgetService.getBudgetByYear(year);
        HtmlTag article = new HtmlTag("article").clazz("box").clazz(status(year));
        Row row = (Row) article.createContent(new Row());
        row.column("col-md-9").with(new H(2).with(new AHref(resolve(year), "Rok " + year)));
        row.column("col-md-3 text-right")
                .with(new Span("muted", "rozpočet"))
                .with(new Span("amount", Amount.of(plan.getbudgetAmount())));

        List<BudgetStatus> statusList = List.of(BudgetStatus.SUCCESS, BudgetStatus.INWORK, BudgetStatus.POSTPONE, BudgetStatus.ERROR);
        statusList.forEach(s -> article.with(statusRow(s, plan.getBudgetListByStatus(s))));
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

    private HtmlTag statusRow(BudgetStatus status, BudgetListDto list) {
        if (list.size() == 0) {
            return new HtmlNoTag("");
        }
        Row row = new Row();
        row.column("col-md-4 text-success").with(status.getDecription());
        row.column("col-md-4").with(projectCount(list.size()));
        row.column("col-md-4 text-right")
                .with(new Span("muted", "Aktuálne výdavky"))
                .with(new Span("amount", Amount.of(list.calculateRealAmount())));
        return row;
    }

    private String projectCount(int count) {
        if (count == 1) {
            return "1 projekt";
        }
        if (count >1 && count < 5)  {
            return count + " projekty";
        }
        return count + " projektov";
    }

    @Override
    public String getFileName() {
        return PageHeader.BUDGET + "index";
    }
}
