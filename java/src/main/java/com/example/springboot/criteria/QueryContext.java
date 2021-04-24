package com.example.springboot.criteria;

import javax.persistence.EntityManager;
import javax.persistence.criteria.*;

public interface QueryContext<T> {
    void where(Expression<Boolean> restriction);

    CriteriaBuilder getCb();

    EntityManager getEm();

    Subquery<Integer> subquery();

    Root<T> getRoot();
}
