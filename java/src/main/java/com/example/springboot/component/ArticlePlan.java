package com.example.springboot.component;

import com.example.springboot.model.Budget;
import com.example.springboot.html.*;

import java.util.List;

public class ArticlePlan extends HtmlTag {
    private final List<Budget> plan;

    public ArticlePlan(List<Budget> plan) {
        super("article");
        this.plan = plan;
    }

    @Override
    public String toString() {
        addClass("budget box inwork");
        Div row = new Div("row");
        addContent(row);
        row.with(title());
        row.with(amount("rozpočet", "365 000€"));
        Div sub = new Div("sub");
        addContent(sub);
        Div row2 = new Div("row");
        sub.addContent(row2);
        row2.addContent(subTitle());
        row2.with(amount("výdavky", "113 075,99€"));
        row2.with(new Div("col-md-12","Realizovať sa bude projektová dokumentácia na multifunkčné ihrisko a dráhu. Prebieha príprava súťaže"));
        return super.toString();
    }

    private HtmlTag amount(String title, String amount) {
        return new Div("col-md-3 text-right")
                .with(new Span("muted", title))
                .with(new Span("amount", amount));
    }

    private HtmlTag title() {
        return new Div("col-md-9").with(new H(3, "", "Rekonštrukcie ZŠ a MŠ"));
    }

    private HtmlTag subTitle() {
        return new Div("col-md-9")
                .with(new Strong().with("Revitalizácia športového areálu,  multifunkčného ihriska - I. fáza"))
                .with(new HtmlNoTag(" - "))
                .with(new Small().with("2020"));

    }
}
