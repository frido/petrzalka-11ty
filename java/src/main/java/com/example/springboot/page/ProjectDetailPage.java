package com.example.springboot.page;

import com.example.springboot.component.ArticleProjectComponent;
import com.example.springboot.component.Figure;
import com.example.springboot.component.PageHeader;
import com.example.springboot.component.Title;
import com.example.springboot.html.*;
import com.example.springboot.model.Image;
import com.example.springboot.model.Project;
import com.example.springboot.model.Statement;

public class ProjectDetailPage extends BasePage {

    private final Project project;

    public ProjectDetailPage(Project project) {
        this.project = project;
    }

    @Override
    public HtmlTag getContent() {
        Section root = new Section();
        root.addContent(new Title(project.getTitle()));
        root.addContent(new ArticleProjectComponent(project, false));
        root.addContent(gallery());
        root.addContent(new HtmlNoTag(project.getDescription()));
        return root;
    }

    private HtmlTag gallery() {
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
