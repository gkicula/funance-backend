package com.kicula.funance.controller;

import com.kicula.funance.model.Competencia;
import com.kicula.funance.repository.CompetenciaRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<Competencia> save(@RequestBody Competencia competencia){
//        System.out.println(competencia.getDescricao());
//        return competenciaRepository.save(competencia);
        return ResponseEntity.status(HttpStatus.CREATED).body(competenciaRepository.save(competencia));
    }

//    @PostMapping
//    public ResponseEntity<Competencia> delete(@RequestBody Competencia competencia){
//        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(competenciaRepository.delete(competencia));
//    }
}
