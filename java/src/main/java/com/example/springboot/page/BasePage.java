package com.example.springboot.page;

import com.example.springboot.component.*;
import com.example.springboot.html.Div;
import com.example.springboot.html.HtmlTag;
import com.example.springboot.html.Section;
import com.example.springboot.model.GrantCategory;
import com.example.springboot.service.BudgetService;
import com.example.springboot.service.GrantService;
import com.example.springboot.service.ProjectService;

public abstract class BasePage implements Page {

    protected final BudgetService budgetService;
    protected final GrantService grantService;
    protected ProjectService projectService;

    public BasePage(BudgetService budgetService, GrantService grantService, ProjectService projectService) {
        this.budgetService = budgetService;
        this.grantService = grantService;
        this.projectService = projectService;
    }

    @Override
    public String toString() {
        Template template = new Template();
        template.setContent(getContent());
        return template.toString();
    }

    protected abstract HtmlTag getContent();


    @Override
    public String getFileName() {
        return "index";
    }
}
