package com.example.springboot.page;

import com.example.springboot.component.*;
import com.example.springboot.html.Div;
import com.example.springboot.html.HtmlTag;
import com.example.springboot.html.Section;
import com.example.springboot.model.GrantCategory;
import com.example.springboot.service.BudgetService;
import com.example.springboot.service.GrantService;
import com.example.springboot.service.ProjectService;

public class IndexPage extends BasePage {

    private final BudgetService budgetService;
    private final GrantService grantService;
    private final ProjectService projectService;

    public IndexPage(BudgetService budgetService, GrantService grantService, ProjectService projectService) {

        this.budgetService = budgetService;
        this.grantService = grantService;
        this.projectService = projectService;
    }

    public HtmlTag getContent() {
        Div root = new Div("");
        root.addContent(projects());
        root.addContent(budgets());
        root.addContent(sport());
        root.addContent(oz());
        return root;
    }

    private HtmlTag projects() {
        Section timeline = new Section();
        timeline.addContent(new Title("Projekty"));
        timeline.addContent(new ArticleProjectListComponent(projectService.getProjectForIndex()));
        return timeline;
    }

    private HtmlTag budgets() {
        Section plan = new Section();
        plan.addContent(new Title("Investičný plán 2021"));
        plan.addContent(new ArticleBudgetListComponent(budgetService.getBudgetForIndex(), false));
        return plan;
    }

    private HtmlTag sport() {
        Section sport = new Section();
        sport.addContent(new Title("Športové granty"));
        sport.addContent(new ArticleSportListComponent(grantService.getGrantTreeByCategory(GrantCategory.SPORT, 4)));
        return sport;
    }

    private HtmlTag oz() {
        Section sport = new Section();
        sport.addContent(new Title("Dotácie"));
        sport.addContent(new ArticleSportListComponent(grantService.getGrantTreeByCategory(GrantCategory.OZ, 4)));
        return sport;
    }

    @Override
    public String getFileName() {
        return "index";
    }
}
