package com.example.springboot.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "project")
public class Project {
    @Id
    private int id;
    private String title;
    private LocalDate date;
    private String description;
    @ManyToOne()
    @JoinColumn(name = "icon", referencedColumnName = "id")
    private Image icon;
    @ManyToOne()
    @JoinColumn(name = "budget", referencedColumnName = "id")
    private Budget budget;
    private String url;
    private String phase;
    @Enumerated(EnumType.STRING)
    private ProjectStatus status;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Image getIcon() {
        return icon;
    }

    public void setIcon(Image icon) {
        this.icon = icon;
    }

    public Budget getBudget() {
        return budget;
    }

    public void setBudget(Budget budget) {
        this.budget = budget;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getPhase() {
        return phase;
    }

    public void setPhase(String phase) {
        this.phase = phase;
    }

    public ProjectStatus getStatus() {
        return status;
    }

    public void setStatus(ProjectStatus status) {
        this.status = status;
    }
}
