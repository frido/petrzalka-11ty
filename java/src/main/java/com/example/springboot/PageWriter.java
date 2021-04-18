package com.example.springboot;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class PageWriter {
    private final Configuration configuration;

    public PageWriter(Configuration configuration) {
        this.configuration = configuration;
    }

    public void write(Page page) throws IOException {
        Path fileName = Path.of(configuration.getOutputDir(), page.getFileName() + ".html");
        Files.writeString(fileName, page.toString());
    }
}
