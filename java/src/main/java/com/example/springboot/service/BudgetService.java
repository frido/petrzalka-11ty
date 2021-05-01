package com.example.springboot.service;

import com.example.springboot.criteria.AttributeOrderCriteriaBuilder;
import com.example.springboot.criteria.CriteriaQueryContext;
import com.example.springboot.criteria.EqualsCriteriaBuilder;
import com.example.springboot.criteria.InterfaceCriteriaBuilder;
import com.example.springboot.model.Budget;
import com.example.springboot.model.Budget_;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Component
public class BudgetService {

    @PersistenceContext
    private EntityManager em;
    private InterfaceCriteriaBuilder defaultOrder = new AttributeOrderCriteriaBuilder(Budget_.amountOriginal);

    public List<Budget> getBudgetForIndex() {
        return findByCriteria(new EqualsCriteriaBuilder<>(Budget_.year, 2021), 4);
    }

    private List<Budget> findByCriteria(InterfaceCriteriaBuilder<Budget> criteriaBuilder, int limit) {
        return new CriteriaQueryContext(em, Budget.class).apply(criteriaBuilder).apply(defaultOrder).getResultList(limit);
    }
}
