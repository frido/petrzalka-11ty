package com.example.springboot.service;

import com.example.springboot.model.Grant;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;

@Component
public class GrantService {

    @PersistenceContext
    private EntityManager em;

    public List<Grant> getAll() {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Grant> q = cb.createQuery(Grant.class);
        Root<Grant> c = q.from(Grant.class);
        TypedQuery<Grant> query = em.createQuery(q);
        List<Grant> results = query.getResultList();
        return  results;
    }
}
