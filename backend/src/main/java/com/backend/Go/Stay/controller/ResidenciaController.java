/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.backend.Go.Stay.controller;

import com.backend.Go.Stay.entity.Residencia;
import com.backend.Go.Stay.service.MainService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ResidenciaController {
    @Autowired MainService mainService;
    
    @GetMapping("residencia/traer")
    public ResponseEntity<List<Residencia>> getResidencias() {
        List<Residencia> residencias = mainService.findAllResidencias();
        return new ResponseEntity<>(residencias, HttpStatus.OK);
    }

    @GetMapping("residencia/traer/{id}")
    public ResponseEntity<Residencia> getResidenciaById(@PathVariable int id) {
        Residencia usuario = mainService.findResidenciaById(id);
        if (usuario == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(usuario, HttpStatus.OK);
        }
    }

    @PostMapping("residencia/crear")
    public ResponseEntity<Residencia> addResidencia(@RequestBody Residencia usuario) {
        mainService.saveResidencia(usuario);
        return new ResponseEntity<>(usuario, HttpStatus.CREATED);
    }

    @PutMapping("residencia/editar")
    public ResponseEntity<Residencia> updateResidencia(@RequestBody Residencia usuario) {
        mainService.saveResidencia(usuario);
        return new ResponseEntity<>(usuario, HttpStatus.OK);
    }

    @DeleteMapping("residencia/borrar/{id}")
    public ResponseEntity<Void> deleteResidencia(@PathVariable int id) {
        mainService.deleteResidenciaById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
