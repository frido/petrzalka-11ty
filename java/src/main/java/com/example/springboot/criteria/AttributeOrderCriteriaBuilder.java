package com.example.springboot.criteria;

import javax.persistence.criteria.Root;
import javax.persistence.metamodel.SingularAttribute;
import java.util.Collections;

public class AttributeOrderCriteriaBuilder<R> implements InterfaceCriteriaBuilder<R>{

    private final SingularAttribute<R, ?> attribute;

    public AttributeOrderCriteriaBuilder(SingularAttribute<R, ?> attribute) {

        this.attribute = attribute;
    }

    public void apply(QueryContext<?> q, Root<R> r) {
        q.order(Collections.singletonList(q.getCb().desc(r.get(attribute))));
    }
}
