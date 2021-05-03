package com.example.springboot.service;

import com.example.springboot.model.GrantCategory;
import com.example.springboot.model.dto.GrantDto;
import org.junit.jupiter.api.Test;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.util.Collection;

class GrantItemServiceTest {

    @Test
    public void test() {
        var ctx = new AnnotationConfigApplicationContext();
        ctx.scan("com.example");
        ctx.refresh();
        GrantService grantService = ctx.getBean(GrantService.class);
//        grantService.getSubjectByCategory(new EqualsCriteriaBuilder(GrantSubject_.category, GrantCategory.SPORT));
        Collection<GrantDto> result = grantService.getGrantTreeByCategory(GrantCategory.SPORT, 4);
        System.out.println(result);
        ctx.close();
    }

}