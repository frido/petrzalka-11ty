package com.example.springboot.page;

import com.example.springboot.component.ArticleSportListComponent;
import com.example.springboot.component.Title;
import com.example.springboot.html.Div;
import com.example.springboot.html.HtmlTag;
import com.example.springboot.html.Section;
import com.example.springboot.model.GrantCategory;
import com.example.springboot.service.BudgetService;
import com.example.springboot.service.GrantService;
import com.example.springboot.service.ProjectService;

public class GrantPage extends BasePage {

    public GrantPage(BudgetService budgetService, GrantService grantService, ProjectService projectService) {
        super(budgetService, grantService, projectService);
    }

    protected HtmlTag getContent() {
        Div root = new Div("");
        root.addContent(sport());
        root.addContent(oz());
        return root;
    }

    private HtmlTag sport() {
        Section sport = new Section();
        sport.addContent(new Title("Športové granty"));
        sport.addContent(new ArticleSportListComponent(grantService.getGrantTreeByCategory(GrantCategory.SPORT, 100)));
        return sport;
    }

    private HtmlTag oz() {
        Section sport = new Section();
        sport.addContent(new Title("Dotácie"));
        sport.addContent(new ArticleSportListComponent(grantService.getGrantTreeByCategory(GrantCategory.OZ, 100)));
        return sport;
    }

    @Override
    public String getFileName() {
        return "grants";
    }
}
