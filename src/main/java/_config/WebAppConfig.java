package _config;

import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
@EnableWebMvc
@EnableTransactionManagement
<<<<<<< HEAD
@ComponentScan({"controller", "dao", "model", "service"})
=======
@ComponentScan("controller, service, dao")
>>>>>>> origin/Jerry
public class WebAppConfig implements WebMvcConfigurer {
	@Bean
	public ViewResolver internalResouceViewResolver() {
		InternalResourceViewResolver resolver = new InternalResourceViewResolver();
		resolver.setPrefix("/");
		resolver.setSuffix(".html");
		return resolver;
	}

	@Bean
	public MessageSource messageSource() {
		ResourceBundleMessageSource rbms = new ResourceBundleMessageSource();
		rbms.setBasename("messages");
		return rbms;
	}

	@Override
	public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
		configurer.enable();
	}

// @Bean
// public CommonsMultipartResolver multipartResolver() {
//  CommonsMultipartResolver resolver = new CommonsMultipartResolver();
//  resolver.setDefaultEncoding("UTF-8");
//  resolver.setMaxUploadSize(81920000);
//  return resolver;
// }
}