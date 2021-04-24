package com.example.springboot.service;

import com.example.springboot.criteria.CriteriaQueryContext;
import com.example.springboot.criteria.EqualsCriteriaBuilder;
import com.example.springboot.criteria.InterfaceCriteriaBuilder;
import com.example.springboot.criteria.SubqueryInCriteriaBuilder;
import com.example.springboot.model.*;
import com.example.springboot.model.dto.GrantDto;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class GrantService {

    @PersistenceContext
    private EntityManager em;

    public Collection<GrantDto> getGrantTreeByCategory(GrantCategory category) {
        List<GrantItem> grantList = this.findByCriteria(
                new SubqueryInCriteriaBuilder<>(GrantItem_.subjectId, GrantSubject_.id,
                    new EqualsCriteriaBuilder(GrantSubject_.category, category)));

        Map<GrantSubject, GrantDto> dtoList = new HashMap<>();
        grantList.forEach(x -> {
            dtoList.put(
                    x.getSubject(),
                    dtoList.getOrDefault(x.getSubject(), new GrantDto(x.getSubject())).withGrant(x)
            );
        });
        return dtoList.values();
    }

    private List<GrantItem> findByCriteria(InterfaceCriteriaBuilder<GrantItem> criteriaBuilder) {
        return new CriteriaQueryContext(em, GrantItem.class).apply(criteriaBuilder).getResultList();
    }
}
