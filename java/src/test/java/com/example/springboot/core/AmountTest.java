package com.example.springboot.core;

import org.junit.jupiter.api.Test;

import java.math.BigDecimal;

import static org.junit.jupiter.api.Assertions.*;

class AmountTest {
    @Test
    public void test() {
        BigDecimal value = new BigDecimal(111111.254);
        System.out.println(Amount.of(value));
    }
}