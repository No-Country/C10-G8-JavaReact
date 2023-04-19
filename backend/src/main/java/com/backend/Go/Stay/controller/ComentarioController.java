/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.backend.Go.Stay.controller;

import com.backend.Go.Stay.entity.Comentario;
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
public class ComentarioController {
    @Autowired MainService mainService;
    
    @GetMapping("comentario/traer")
    public ResponseEntity<List<Comentario>> getComentarios() {
        List<Comentario> comentarios = mainService.findAllComentarios();
        return new ResponseEntity<>(comentarios, HttpStatus.OK);
    }

    @GetMapping("comentario/traer/{id}")
    public ResponseEntity<Comentario> getComentarioById(@PathVariable int id) {
        Comentario usuario = mainService.findComentarioById(id);
        if (usuario == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(usuario, HttpStatus.OK);
        }
    }

    @PostMapping("comentario/crear")
    public ResponseEntity<Comentario> addComentario(@RequestBody Comentario usuario) {
        mainService.saveComentario(usuario);
        return new ResponseEntity<>(usuario, HttpStatus.CREATED);
    }

    @PutMapping("comentario/editar")
    public ResponseEntity<Comentario> updateComentario(@RequestBody Comentario usuario) {
        mainService.saveComentario(usuario);
        return new ResponseEntity<>(usuario, HttpStatus.OK);
    }

    @DeleteMapping("comentario/borrar/{id}")
    public ResponseEntity<Void> deleteComentario(@PathVariable int id) {
        mainService.deleteComentarioById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
