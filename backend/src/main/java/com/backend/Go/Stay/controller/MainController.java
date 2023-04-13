package com.backend.Go.Stay.controller;

import com.backend.Go.Stay.entity.Comentario;
import com.backend.Go.Stay.entity.Residencia;
import com.backend.Go.Stay.entity.Usuario;
import com.backend.Go.Stay.service.MainService;
import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class MainController {

    @Autowired
    MainService mainService;

    //List de todos los usuarios
    @GetMapping("usuario/traer")
    public ResponseEntity<List<Usuario>> usuarios() {
        List<Usuario> usuarios = mainService.usuarios();
        return new ResponseEntity<>(usuarios, HttpStatus.OK);
    }

    // List de todas las residencias
    @GetMapping("residencia/traer")
    public ResponseEntity<List<Residencia>> residencias() {
        List<Residencia> residencias = mainService.residencias();
        return new ResponseEntity(residencias, HttpStatus.OK);
    }

    // Post de Usuario para crear usuario
    @PostMapping("usuario/crear")
    public ResponseEntity<Usuario> createUsuario(@RequestBody Usuario usuario) {
        Set<Residencia> residencias = usuario.getResidencias();
        if (residencias != null && !residencias.isEmpty()) {
            for (Residencia r : residencias) {
                r.setUsuario(usuario);
            }
        }
        Usuario savedUsuario = mainService.guardarUsuario(usuario);
        return new ResponseEntity<>(savedUsuario, HttpStatus.CREATED);
    }

    //Post de Comentario para crear comentario
    @PostMapping("comentario/crear")
    public void crearComentario(@RequestBody Comentario comentario) {
        mainService.guardarComentario(comentario);
    }

    //Get para traer 1 Usuario por ID
    @GetMapping(path = {"usuario/traer/{id}"})
    public Usuario traerUsuario(@PathVariable("id") int id) {

        return mainService.traerUsuario(id);

    }

}
