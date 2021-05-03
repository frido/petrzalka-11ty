package com.example.springboot.page;

import com.example.springboot.component.ArticleBudgetListComponent;
import com.example.springboot.component.ArticleProjectListComponent;
import com.example.springboot.component.Title;
import com.example.springboot.html.Div;
import com.example.springboot.html.HtmlTag;
import com.example.springboot.html.Section;
import com.example.springboot.service.BudgetService;
import com.example.springboot.service.GrantService;
import com.example.springboot.service.ProjectService;

public class BudgetPage extends BasePage {

    public BudgetPage(BudgetService budgetService, GrantService grantService, ProjectService projectService) {
        super(budgetService, grantService, projectService);
    }

    protected HtmlTag getContent() {
        Div root = new Div("");
        root.addContent(budgets());
        return root;
    }

    private HtmlTag budgets() {
        Section plan = new Section();
        plan.addContent(new Title("Investičný plán 2021"));
        plan.addContent(new ArticleBudgetListComponent(budgetService.getBudgetByYear(2021)));
        return plan;
    }

    @Override
    public String getFileName() {
        return "budgets";
    }
}
