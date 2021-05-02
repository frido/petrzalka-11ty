package com.example.springboot;

import com.example.springboot.core.PageWriter;
import com.example.springboot.page.IndexPage;
import com.example.springboot.page.ProjectPage;
import com.example.springboot.service.BudgetService;
import com.example.springboot.service.GrantService;
import com.example.springboot.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MainRunner implements CommandLineRunner {

    @Autowired
    BudgetService budgetService;

    @Autowired
    GrantService grantService;

    @Autowired
    ProjectService projectService;

    @Override
    public void run(String... args) throws Exception {
        System.out.println("It Works!");

        PageWriter pw = new PageWriter(new Configuration());
        pw.write(new IndexPage(budgetService, grantService, projectService));
        pw.write(new ProjectPage(budgetService, grantService, projectService));

    }
}
