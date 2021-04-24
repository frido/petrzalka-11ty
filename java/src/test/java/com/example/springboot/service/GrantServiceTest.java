package com.example.springboot.service;

import com.example.springboot.criteria.EqualsCriteriaBuilder;
import com.example.springboot.criteria.SubqueryInCriteriaBuilder;
import com.example.springboot.model.GrantCategory;
import com.example.springboot.model.GrantSubject_;
import com.example.springboot.model.Grant_;
import org.junit.jupiter.api.Test;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import static org.junit.jupiter.api.Assertions.*;

class GrantServiceTest {

    @Test
    public void test() {
        var ctx = new AnnotationConfigApplicationContext();
        ctx.scan("com.example");
        ctx.refresh();
        GrantService grantService = ctx.getBean(GrantService.class);
//        grantService.getSubjectByCategory(new EqualsCriteriaBuilder(GrantSubject_.category, GrantCategory.SPORT));
        grantService.getSubjectByCategory(
                new SubqueryInCriteriaBuilder<>(
                        Grant_.subjectId,
                        GrantSubject_.id,
                        new EqualsCriteriaBuilder(GrantSubject_.category, GrantCategory.SPORT)));
        ctx.close();
    }

}