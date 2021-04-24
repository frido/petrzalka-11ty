package com.example.springboot.service;

import com.example.springboot.criteria.CriteriaQueryContext;
import com.example.springboot.criteria.InterfaceCriteriaBuilder;
import com.example.springboot.model.*;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import javax.persistence.criteria.Subquery;
import java.util.Collections;
import java.util.List;

@Component
public class GrantService {

    @PersistenceContext
    private EntityManager em;

    public List<Grant> getSportsForIndex() {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Grant> q = cb.createQuery(Grant.class);
        Root<Grant> c = q.from(Grant.class);
        c.fetch(Grant_.subject);
        q.where(c.get(Grant_.subjectId).in(subquery(cb, q)));

        TypedQuery<Grant> query = em.createQuery(q);
        List<Grant> results = query.getResultList();
        return  Collections.emptyList();
    }

    public Subquery<Integer> subquery(CriteriaBuilder cb, CriteriaQuery<Grant> q) {
        Subquery<Integer> sub = q.subquery(Integer.class);
        Root<GrantSubject> r = sub.from(GrantSubject.class);
        sub.select(r.get(GrantSubject_.id));
        sub.where(cb.equal(r.get(GrantSubject_.category), GrantCategory.SPORT));
        return sub;
    }

    public List<GrantSubject> getSubjectByCategory(InterfaceCriteriaBuilder<GrantSubject> qcb) {
        return new CriteriaQueryContext(em, Grant.class).apply(qcb).getResultList();
    }
}
