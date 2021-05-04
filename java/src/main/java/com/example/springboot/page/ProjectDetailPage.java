package com.example.springboot.page;

import com.example.springboot.component.ArticleProjectListComponent;
import com.example.springboot.component.Title;
import com.example.springboot.html.Div;
import com.example.springboot.html.HtmlTag;
import com.example.springboot.html.Section;
import com.example.springboot.model.Project;

import java.util.List;

public class ProjectDetailPage extends BasePage {

    private final Project project;

    public ProjectDetailPage(Project project) {
        this.project = project;
    }

    @Override
    public HtmlTag getContent() {
        Div root = new Div("");
        root.addContent(projects());
        return root;
    }

    private HtmlTag projects() {
        Section timeline = new Section();
        timeline.addContent(new Title("Projekty"));
        timeline.addContent(new ArticleProjectListComponent(List.of(project)));
        return timeline;
    }

    @Override
    public String getFileName() {
        return "projects/" + project.getUrl() + "/index";
    }
}
