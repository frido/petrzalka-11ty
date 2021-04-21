package com.example.springboot;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity(name = "grant_item")
public class Grant {
    @Id
    private int id;

    @ManyToOne()
    @JoinColumn(name = "subject", referencedColumnName = "id")
    private GrantSubject subject;
    private int year;
    private BigDecimal amount;
    private String detail;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public GrantSubject getSubject() {
        return subject;
    }

    public void setSubject(GrantSubject subject) {
        this.subject = subject;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    @Transient
    public boolean isCurrent() {
        return 2021 == getYear();
    }

    @Transient
    public boolean isOld() {
        return !isCurrent();
    }
}
