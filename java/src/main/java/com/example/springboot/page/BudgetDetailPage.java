package com.example.springboot.page;

import com.example.springboot.component.ArticleBudgetListComponent;
import com.example.springboot.component.ArticleProjectListComponent;
import com.example.springboot.component.PageHeader;
import com.example.springboot.component.Title;
import com.example.springboot.html.Div;
import com.example.springboot.html.HtmlTag;
import com.example.springboot.html.Section;
import com.example.springboot.model.Budget;
import com.example.springboot.model.BudgetStatus;
import com.example.springboot.model.Project;
import com.example.springboot.service.BudgetByYearDto;

import java.util.List;
import java.util.Map;

public class BudgetDetailPage extends BasePage {

    private final BudgetByYearDto budgetByYear;

    public BudgetDetailPage(BudgetByYearDto budgetByYear) {
        this.budgetByYear = budgetByYear;
    }

    public HtmlTag getContent() {
        Div root = new Div("");
        root.addContent(budgets());
        return root;
    }

    private HtmlTag budgets() {
        Section plan = new Section();
        plan.addContent(new Title("Investičný plán " + budgetByYear.getYear()));
        plan.addContent(new ArticleBudgetListComponent(budgetByYear, true));
        return plan;
    }

    @Override
    public String getFileName() {
        return PageHeader.BUDGET + budgetByYear.getYear() + "/index";
    }
}
