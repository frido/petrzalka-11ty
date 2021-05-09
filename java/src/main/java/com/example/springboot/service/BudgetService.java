package com.example.springboot.service;

import com.example.springboot.criteria.AttributeOrderCriteriaBuilder;
import com.example.springboot.criteria.CriteriaQueryContext;
import com.example.springboot.criteria.EqualsCriteriaBuilder;
import com.example.springboot.criteria.InterfaceCriteriaBuilder;
import com.example.springboot.model.Budget;
import com.example.springboot.model.BudgetStatus;
import com.example.springboot.model.Budget_;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Component
public class BudgetService {

    @PersistenceContext
    private EntityManager em;
    private final InterfaceCriteriaBuilder<Budget> defaultOrder = new AttributeOrderCriteriaBuilder<>(Budget_.amountOriginal);

    public BudgetByYearDto getBudgetForIndex() {
        List<Budget> budgetList = findByCriteria(new EqualsCriteriaBuilder<>(Budget_.year, 2021), 4);
        return new BudgetByYearDto(2021, budgetList);
    }

    private List<Budget> findByCriteria(InterfaceCriteriaBuilder<Budget> criteriaBuilder, int limit) {
        return new CriteriaQueryContext<>(em, Budget.class).apply(criteriaBuilder).apply(defaultOrder).getResultList(limit);
    }

    public BudgetByYearDto getBudgetByYear(int year) {
        List<Budget> budgetList = findByCriteria(new EqualsCriteriaBuilder<>(Budget_.year, year), 100);
        return new BudgetByYearDto(year, budgetList);
    }
}
