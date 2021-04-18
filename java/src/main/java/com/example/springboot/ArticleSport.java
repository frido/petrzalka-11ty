package com.example.springboot;

import com.example.springboot.core.*;

public class ArticleSport extends HtmlTag {
    private final Grant grant;

    public ArticleSport(Grant grant) {
        super("article");
        this.grant = grant;
    }

    @Override
    public String toString() {
        Div row = new Div("row");
        addContent(row);

        for(int i = 0; i < 4 ; i++) {
            row.addContent(grant(grant));
        }

        return super.toString();
    }

    private HtmlTag grant(Grant grant) {
        return new Div("grant col-lg-3 col-md-6 col-sm-6")
                .with(article(grant));
    }

    private HtmlTag article(Grant grant) {
        return new HtmlTag("article").clazz("box h-100 inwork text-center")
                .with(new H(3, "", "FC Petržalka"))
                .with(new HtmlTag("p").with(new Span("amount", "39 576,66€")))
                .with(new HtmlTag("p"))
                .with(new Div("", new Small("23 306,73 (2020)")));
    }

}
