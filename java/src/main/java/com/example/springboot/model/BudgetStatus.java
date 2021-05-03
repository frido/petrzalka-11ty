package com.example.springboot.model;

public enum BudgetStatus {
    ERROR("", "Error"),
    INWORK("<i class=\"far fa-play-circle\"></i>", "Realizuje sa"),
    SUCCESS("", "Hotovo"),
    POSTPONE("", "Odlozene");

    private final String icon;
    private final String description;

    BudgetStatus(String icon, String description) {
        this.icon = icon;
        this.description = description;
    }

    public String getIcon() {
        return icon;
    }

    public String getDecription() {
        return description;
    }
}
