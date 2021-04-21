package com.example.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MainRunner implements CommandLineRunner {

    @Autowired
    BudgetService budgetService;

    @Autowired
    GrantService grantService;

    @Override
    public void run(String... args) throws Exception {
        System.out.println("It Works!");

        PageWriter pw = new PageWriter(new Configuration());
        pw.write(new IndexPage(budgetService, grantService));

    }
}
