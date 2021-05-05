package com.example.springboot.model;

import static com.example.springboot.core.CssClass.STATUS_INWORK;

public enum ProjectStatus {
    INWORK("prebieha", STATUS_INWORK);

    private final String label;
    private final String status;

    ProjectStatus(String label, String status) {
        this.label = label;
        this.status = status;
    }

    public String clazz() {
        return status;
    }

    public String label() {
        return label;
    }
}
