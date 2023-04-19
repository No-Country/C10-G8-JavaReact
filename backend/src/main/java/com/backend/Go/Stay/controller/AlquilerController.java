/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.backend.Go.Stay.controller;

import com.backend.Go.Stay.entity.Alquiler;
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
public class AlquilerController {
    
    /*@Autowired MainService mainService;
    
    @GetMapping("/comentarios")
    public ResponseEntity<List<Alquiler>> getAlquileres() {
        List<Alquiler> comentarios = mainService.findAllAlquileres();
        return new ResponseEntity<>(comentarios, HttpStatus.OK);
    }

    @GetMapping("/comentarios/{id}")
    public ResponseEntity<Alquiler> getAlquilerById(@PathVariable int id) {
        Alquiler usuario = mainService.findAlquilerById(id);
        if (usuario == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(usuario, HttpStatus.OK);
        }
    }

    @PostMapping("/comentarios")
    public ResponseEntity<Alquiler> addAlquiler(@RequestBody Alquiler usuario) {
        mainService.saveAlquiler(usuario);
        return new ResponseEntity<>(usuario, HttpStatus.CREATED);
    }

    @PutMapping("/comentarios")
    public ResponseEntity<Alquiler> updateAlquiler(@RequestBody Alquiler usuario) {
        mainService.saveAlquiler(usuario);
        return new ResponseEntity<>(usuario, HttpStatus.OK);
    }

    @DeleteMapping("/comentarios/{id}")
    public ResponseEntity<Void> deleteAlquiler(@PathVariable int id) {
        mainService.deleteAlquilerById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }*/
}
