package com.example.springboot.page;

import com.example.springboot.component.ArticleBudgetListComponent;
import com.example.springboot.component.ArticleProjectListComponent;
import com.example.springboot.component.ArticleSportListComponent;
import com.example.springboot.component.Title;
import com.example.springboot.html.Div;
import com.example.springboot.html.HtmlTag;
import com.example.springboot.html.Section;
import com.example.springboot.model.GrantCategory;
import com.example.springboot.service.BudgetService;
import com.example.springboot.service.GrantService;
import com.example.springboot.service.ProjectService;

public class ProjectPage extends BasePage {

    protected final ProjectService projectService;

    public ProjectPage(ProjectService projectService) {
        super();
        this.projectService = projectService;
    }

    public HtmlTag getContent() {
        Div root = new Div("");
        root.addContent(projects());
        return root;
    }

    private HtmlTag projects() {
        Section timeline = new Section();
        timeline.addContent(new Title("Projekty"));
        timeline.addContent(new ArticleProjectListComponent(projectService.getAllProjects()));
        return timeline;
    }

    @Override
    public String getFileName() {
        return "projects";
    }
}
