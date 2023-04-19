/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.backend.Go.Stay.controller;

import com.backend.Go.Stay.entity.Usuario;
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
public class UsuarioController {
    @Autowired MainService mainService;
    
    @GetMapping("usuario/traer")
    public ResponseEntity<List<Usuario>> getUsuarios() {
        List<Usuario> usuarios = mainService.findAllUsuarios();
        return new ResponseEntity<>(usuarios, HttpStatus.OK);
    }

    @GetMapping("usuario/traer/{id}")
    public ResponseEntity<Usuario> getUsuarioById(@PathVariable int id) {
        Usuario usuario = mainService.findUsuarioById(id);
        if (usuario == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(usuario, HttpStatus.OK);
        }
    }

    @PostMapping("usuario/crear")
    public ResponseEntity<Usuario> addUsuario(@RequestBody Usuario usuario) {
        mainService.saveUsuario(usuario);
        return new ResponseEntity<>(usuario, HttpStatus.CREATED);
    }

    @PutMapping("usuario/editar")
    public ResponseEntity<Usuario> updateUsuario(@RequestBody Usuario usuario) {
        mainService.saveUsuario(usuario);
        return new ResponseEntity<>(usuario, HttpStatus.OK);
    }

    @DeleteMapping("usuario/borrar/{id}")
    public ResponseEntity<Void> deleteUsuario(@PathVariable int id) {
        mainService.deleteUsuarioById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
