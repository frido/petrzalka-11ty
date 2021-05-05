package com.example.springboot.core;

public class Base {

    private static String base = "file:///C:/home/repos/11ty-petrzalka/_site"; // TODO: configurable

    public static String resolve(String url) {
        return base + url;
    }

    public static String resolve(String url, String name) {
        return base + url + "/" + name + "/";
    }
}
