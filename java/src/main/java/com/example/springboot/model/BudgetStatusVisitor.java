package com.example.springboot.model;

public interface BudgetStatusVisitor {
    void visitSuccess();
    void visitInProgress();
    void visitPospone();
    void viistError();
}
