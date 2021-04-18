package com.example.springboot;

import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;

@Component
public class BudgetService {

    @PersistenceContext
    private EntityManager em;

    public List<Budget> getPlan() {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Budget> q = cb.createQuery(Budget.class);
        Root<Budget> c = q.from(Budget.class);
        q.select(c);
        TypedQuery<Budget> query = em.createQuery(q);
        List<Budget> results = query.getResultList();
        return  results;
    }
}
