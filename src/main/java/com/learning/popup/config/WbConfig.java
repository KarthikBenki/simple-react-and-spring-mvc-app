package com.learning.popup.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WbConfig implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry){
        String path = "forward:/";
        registry.addViewController("/{spring:\\w+}")
        .setViewName(path);
        //  registry.addViewController("/**/{spring:\\w+}")
        // .setViewName(path);
         registry.addViewController("/{spring:\\w+}/**{apring:?!(\\.js|\\.css)$}")
        .setViewName(path);

    }

    @Override
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/**")
        .allowedOrigins("*")
        .allowedMethods("PUT","DELETE","GET","POST");
    }
    
}
