package com.example.springboot.component;

import com.example.springboot.core.Amount;
import com.example.springboot.html.Div;
import com.example.springboot.html.HtmlTag;
import com.example.springboot.model.BudgetStatus;
import com.example.springboot.model.BudgetStatusVisitor;
import com.example.springboot.service.BudgetListDto;

public class BudgetStatusHeaderVisitor implements BudgetStatusVisitor {
    private final HtmlTag segment;
    private final BudgetListDto list;

    public BudgetStatusHeaderVisitor(HtmlTag segment, BudgetListDto list) {
        this.segment = segment;
        this.list = list;
    }

    @Override
    public void visitSuccess() {
        BudgetStatus status = BudgetStatus.SUCCESS;
        HtmlTag row = createRow(status);
        row(row,2, description(status));
        row(row,2, projectCount(list.size()));
        row(row,8, "Výdavky: " + Amount.of(list.calculateRealAmount()));
    }

    private String description(BudgetStatus status) {
        return status.getDecription() + " " + status.getIcon();
    }

    @Override
    public void visitInProgress() {
        BudgetStatus status = BudgetStatus.INWORK;
        HtmlTag row = createRow(status);
        row(row,2, description(status));
        row(row,2, projectCount(list.size()));
        row(row,4, "Aktuálne výdavky: " + Amount.of(list.calculateRealAmount()));
        row(row,4, "Plánované výdavky: " + Amount.of(list.calculateOriginalAmount()));
    }

    @Override
    public void visitPospone() {
        BudgetStatus status = BudgetStatus.POSTPONE;
        HtmlTag row = createRow(status);
        row(row,2, description(status));
        row(row,2, projectCount(list.size()));
    }

    @Override
    public void viistError() {
        BudgetStatus status = BudgetStatus.ERROR;
        HtmlTag row = createRow(status);
        row(row,2, description(status));
        row(row,2, projectCount(list.size()));
    }

    private void row(HtmlTag row, int columnSize, String text) {
        row.with(new Div("col-md-" + columnSize).with(text));
    }

    private HtmlTag createRow(BudgetStatus status) {
        return segment.createContent(new Div("row status-text").clazz(status.getClazz()));
    }

    private String projectCount(int count) {
        if (count == 1) {
            return "1 projekt";
        }
        if (count >1 && count < 5)  {
            return count + " projekty";
        }
        return count + " projektov";
    }
}
