package com.example.springboot.page;

import com.example.springboot.component.*;

public abstract class BasePage implements Page, ContentProvider, HeadProvider, PageHeaderProvider {

    @Override
    public String toString() {
        return getTemplate().toString();
    }

    protected Template getTemplate() {
        return new Template(this,this, this);
    }
}
