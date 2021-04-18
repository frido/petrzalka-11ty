package com.example.springboot;

import com.sun.tools.javac.util.Assert;
import org.hibernate.PropertyValueException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.support.TransactionTemplate;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadPoolExecutor;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
public class ValidableTest {

    private static final Logger log = LoggerFactory.getLogger(ValidableTest.class);

    @Autowired
    private ValidableService service;

    @PersistenceContext
    private EntityManager em;

    @Autowired
    private TransactionTemplate tx;

    @BeforeEach
    public void setUp() throws Exception {
        tx.execute(status -> {
            em.createQuery("DELETE FROM validable_entity").executeUpdate();
            return status;
        });
    }

    @Test
    public void notNull() throws Exception {
        TransactionBlock tb = new TransactionBlock(tx);
        ValidableEntity entity = new ValidableEntity();
        try {
            tb.run(() -> {
                try {
                    service.persist(entity);
                    Assert.error("There have to be exception");
                } catch (Exception e) {
                    // Exception is catch in here
                    // but there is already transaction rollback flag
                }
            });
        } catch (Exception e) {
            // ok
            // I have to catch exception with transaction rollback
        }
    }


}
