package com.example.springboot.component;

import com.example.springboot.model.Grant;
import com.example.springboot.model.dto.GrantDto;
import com.example.springboot.service.GrantService;
import com.example.springboot.html.*;

import java.util.HashMap;
import java.util.Map;

public class ArticleSport extends HtmlTag {
    private GrantService grantService;

    public ArticleSport(GrantService grantService) {
        super("article");
        this.grantService = grantService;
    }

    @Override
    public String toString() {
        Div row = new Div("row");
        addContent(row);

        Map<Integer, GrantDto> data = new HashMap<>();
        for(Grant grant : grantService.getAll()){
            GrantDto dto = data.getOrDefault(grant.getSubject().getId(), new GrantDto(grant.getSubject()));
            dto.addGrant(grant);
            data.put(grant.getSubject().getId(), dto);
        }

        for(GrantDto grant : data.values()) {
            row.addContent(grant(grant));
        }

        return super.toString();
    }

    private HtmlTag grant(GrantDto grant) {
        return new Div("grant col-lg-3 col-md-6 col-sm-6")
                .with(article(grant));
    }

    private HtmlTag article(GrantDto grant) {
        HtmlTag article = new HtmlTag("article").clazz("box h-100 inwork text-center")
                .with(new H(3, "", grant.getTitle()))
                .with(new HtmlTag("p").with(new Span("amount", grant.getCurrentAmount().toString())));
        for(Grant older : grant.getOldGrants()) {
            article.with(new HtmlTag("p"))
                    .with(new Div("", new Small(getOldDescription(older))));
        }
        return article;
    }

    private String getOldDescription(Grant grant) {
        return grant.getAmount().toString() + " (" + grant.getYear() + ")";
    }

}
