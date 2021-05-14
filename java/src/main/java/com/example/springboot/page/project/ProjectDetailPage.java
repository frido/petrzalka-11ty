package com.example.springboot.page.project;

import com.example.springboot.component.Figure;
import com.example.springboot.component.PageHeader;
import com.example.springboot.component.Title;
import com.example.springboot.html.*;
import com.example.springboot.page.BasePage;

public class ProjectDetailPage extends BasePage {

    private final Project project;

    public ProjectDetailPage(Project project) {
        this.project = project;
    }

    @Override
    public void applyContent(HtmlTag body) {
        body.with(new Title(project.getTitle()))
        .with(new ArticleProjectComponent(project, false))
        .with(gallery())
        .with(new HtmlNoTag(project.getDescription()));
    }

    private HtmlTag gallery() { // TODO: can be as component
        HtmlTag gallery = new Div("gallery");
        for(Image image : project.getImages()) {
            gallery.with(new Figure(image.getSource()));
        }
        return gallery;
    }

    @Override
    public String getFileName() {
        return PageHeader.POSTS + project.getUrl() + "/index";
    }
}
