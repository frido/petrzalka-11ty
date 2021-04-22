package com.example.springboot.model.dto;

import com.example.springboot.model.GrantSubject;
import com.example.springboot.model.Grant;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class GrantDto {
    private GrantSubject subject;
    private List<Grant> grants;

    public GrantDto(GrantSubject subject) {
        this.subject = subject;
        this.grants = new ArrayList<>();
    }

    public void addGrant(Grant g) {
        grants.add(g);
    }

    public String getTitle() {
        return subject.getTitle();
    }

    public Optional<Grant> getCurrentGrant() {
        return grants.stream().filter(Grant::isCurrent).findFirst();
    }

    public List<Grant> getOldGrants() {
        return grants.stream().filter(Grant::isOld).collect(Collectors.toList());
    }

    public BigDecimal getCurrentAmount() {
        return getCurrentGrant().map(Grant::getAmount).orElse(BigDecimal.ZERO);
    }
}
