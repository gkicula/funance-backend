package com.kicula.funance.controller;

import com.kicula.funance.model.Competencia;
import com.kicula.funance.repository.CompetenciaRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/competencia")
@AllArgsConstructor
public class CompetenciasController {
    @Autowired
    private final CompetenciaRepository competenciaRepository;

    @GetMapping
    public List<Competencia> list(){
        return competenciaRepository.findAll();
    }

    @PostMapping
    public void save(@RequestBody Competencia competencia){
//        System.out.println(competencia.getDescricao());
        competenciaRepository.save(competencia);
    }

}
