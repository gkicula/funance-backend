package com.kicula.funance;

import com.kicula.funance.model.Competencia;
import com.kicula.funance.repository.CompetenciaRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class FunanceApplication {

	public static void main(String[] args) {
		SpringApplication.run(FunanceApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CompetenciaRepository competenciaRepository){
		return args -> {
			competenciaRepository.deleteAll();

			Competencia c = new Competencia();
			c.setValor(10.90);
			c.setDescricao("Teste db");
			competenciaRepository.save(c);
		};
	}
}
