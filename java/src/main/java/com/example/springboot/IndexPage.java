package com.example.springboot;

import com.example.springboot.core.*;

public class IndexPage implements Page {

    private final BudgetService budgetService;
    private final GrantService grantService;

    public IndexPage(BudgetService budgetService, GrantService grantService) {
        this.budgetService = budgetService;
        this.grantService = grantService;
    }

    @Override
    public String toString() {
        Template template = new Template();
        template.setContent(getContent());
        return template.toString();
    }

    private HtmlTag getContent() {
        Div root = new Div("");

        Section timeline = new Section();
        root.addContent(timeline);
        timeline.addContent(new Title("Časová os projektov"));
        timeline.addContent(new ArticleProject(new Project()));

        Section plan = new Section();
        root.addContent(plan);
        plan.addContent(new Title("Investičný plán 2021"));
        plan.addContent(new ArticlePlan(budgetService.getPlan()));

        Section sport = new Section();
        root.addContent(sport);
        sport.addContent(new Title("Športové granty"));
        sport.addContent(new ArticleSport(grantService));

        return root;
    }

    @Override
    public String getFileName() {
        return "index";
    }
}
