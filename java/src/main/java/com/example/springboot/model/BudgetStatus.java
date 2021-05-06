package com.example.springboot.model;

import com.example.springboot.core.CssClass;

public enum BudgetStatus {
    ERROR("", "Error", CssClass.STATUS_ERROR),
    INWORK("<i class=\"far fa-play-circle\"></i>", "Realizuje sa", CssClass.STATUS_INWORK),
    SUCCESS("", "Hotovo", CssClass.STATUS_SUCCESS),
    POSTPONE("", "Odlozene", CssClass.POSTPONE);

    private final String icon;
    private final String description;
    private final String clazz;

    BudgetStatus(String icon, String description, String clazz) {
        this.icon = icon;
        this.description = description;
        this.clazz = clazz;
    }

    public String getIcon() {
        return icon;
    }

    public String getDecription() {
        return description;
    }

    public String getClazz() {
        return clazz;
    }
}
