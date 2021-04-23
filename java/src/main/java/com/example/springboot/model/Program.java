package com.example.springboot.model;

public enum Program implements IndexedEnum {
    TEST(1);

    private final Integer id;

    Program(int i) {
        this.id = i;
    }

    @Override
    public int getValue() {
        return id;
    }
}
