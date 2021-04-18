package com.example.springboot.core;

public class Attribute {
    private final String name;
    private String value;

    public Attribute(String name) {
        this.name = name;
    }

    public void set(String value) {
        this.value = value;
    }

    public void add(String value) {
        if(this.value == null || this.value.isEmpty()) {
            this.value = value;
        } else {
            this.value = this.value + " " + value;
        }
    }

    @Override
    public String toString() {
        return new StringBuilder()
                .append(" ")
                .append(name)
                .append("=\"")
                .append(value)
                .append("\"")
                .toString();
    }
}
