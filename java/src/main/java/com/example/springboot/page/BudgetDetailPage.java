package com.example.springboot.page;

import com.example.springboot.component.ArticleBudgetListComponent;
import com.example.springboot.component.ArticleProjectListComponent;
import com.example.springboot.component.Title;
import com.example.springboot.html.Div;
import com.example.springboot.html.HtmlTag;
import com.example.springboot.html.Section;
import com.example.springboot.model.Budget;
import com.example.springboot.model.BudgetStatus;
import com.example.springboot.model.Project;

import java.util.List;
import java.util.Map;

public class BudgetDetailPage extends BasePage {

    private final Map<BudgetStatus, List<Budget>> budgetMap;
    private final int year;

    public BudgetDetailPage(Map<BudgetStatus, List<Budget>> budgetMap, int year) {
        this.budgetMap = budgetMap;
        this.year = year;
    }

    public HtmlTag getContent() {
        Div root = new Div("");
        root.addContent(budgets());
        return root;
    }

    private HtmlTag budgets() {
        Section plan = new Section();
        plan.addContent(new Title("Investičný plán 2021"));
        plan.addContent(new ArticleBudgetListComponent(budgetMap));
        return plan;
    }

    @Override
    public String getFileName() {
        return "budgets/" + year + "/index";
    }
}
