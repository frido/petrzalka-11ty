package com.example.springboot.component;

import com.example.springboot.html.*;

public class Head extends HtmlTag {

    private String base = "file:///C:/home/repos/11ty-petrzalka/java/_site/"; // TODO: configurable

    public Head() {
        super("head");
        addContent(new HtmlTag("base").as("href", base));
        addContent(new HtmlTag("title").with(new HtmlNoTag("Projekty v Petržalke")));
        addContent(new HtmlTag("meta").as("charset", "utf-8"));
        addContent(new Meta("Description", "Petržalka, investičný plán, projekty, rozpočet, štúdie, zámery"));
        addContent(new Meta("viewport", "width=device-width, initial-scale=1.0"));
        addContent(new Meta("language", "sk"));
        addContent(new Meta("robots", "index,follow"));
        addContent(new Meta("googlebot", "index,follow"));
        addContent(new Meta("keywords", "Petržalka, investičný plán, projekty, rozpočet, štúdie, zámery"));
        addContent(new MetaProperty("og:url", ""));
        addContent(new MetaProperty("og:type", "article"));
        addContent(new MetaProperty("og:title", "Projekty v Petržalke"));
        addContent(new MetaProperty("og:description", "Petržalka, investičný plán, projekty, rozpočet, štúdie, zámery"));
        addContent(new MetaProperty("og:image", "img/logo-m.png"));
        addContent(new MetaProperty("fb:app_id", "294839814987467"));
        addContent(new Link("https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap", "stylesheet"));
        addContent(new Link("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap", "stylesheet"));
        addContent(new Link("https://fonts.googleapis.com/css2?family=Roboto&display=swap", "stylesheet"));
        addContent(new Link("css/boot2.css", "stylesheet"));
        addContent(new HtmlTag("script").as("src", "js/index.js"));
        addContent(new Link("img/favicon.ico", "icon").as("type", "image/ico"));
        addContent(new Link("", "canonical"));
        addContent(new Link("/feed/feed.xml", "alternate").as("type", "application/atom+xml").as("title", "Projekty v Petržalke"));

    }
}
