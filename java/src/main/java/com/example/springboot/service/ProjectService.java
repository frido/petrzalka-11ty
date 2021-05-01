package com.example.springboot.service;

import com.example.springboot.criteria.AttributeOrderCriteriaBuilder;
import com.example.springboot.criteria.CriteriaQueryContext;
import com.example.springboot.criteria.InterfaceCriteriaBuilder;
import com.example.springboot.criteria.NoCriteriaBuilder;
import com.example.springboot.model.Budget_;
import com.example.springboot.model.Project;
import com.example.springboot.model.Project_;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Component
public class ProjectService {

    @PersistenceContext
    private EntityManager em;
    private InterfaceCriteriaBuilder defaultOrder = new AttributeOrderCriteriaBuilder(Project_.date);

    public List<Project> getProjectForIndex() {
        return findByCriteria(new NoCriteriaBuilder<>(), 4);
    }

    private List<Project> findByCriteria(InterfaceCriteriaBuilder<Project> criteriaBuilder, int limit) {
        return new CriteriaQueryContext(em, Project.class).apply(criteriaBuilder).apply(defaultOrder).getResultList(limit);
    }
}
