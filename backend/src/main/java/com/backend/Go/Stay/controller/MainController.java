
package com.backend.Go.Stay.controller;

import com.backend.Go.Stay.entity.Comentario;
import com.backend.Go.Stay.entity.Residencia;
import com.backend.Go.Stay.entity.Usuario;
import com.backend.Go.Stay.service.MainService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class MainController {
    
    @Autowired
    MainService mainService;
    
    //List de todos los usuarios
    @GetMapping("usuario/traer")
    public ResponseEntity<List<Usuario>> usuarios(){
        List<Usuario> usuarios = mainService.usuarios();
        return new ResponseEntity<>(usuarios, HttpStatus.OK);
    }
    // List de todas las residencias
    @GetMapping("residencia/traer")
    public ResponseEntity<List<Residencia>> residencias(){
        List<Residencia> residencias = mainService.residencias();
        return new ResponseEntity(residencias, HttpStatus.OK);
    }
    // List de todos los comentarios
    @GetMapping("comentario/traer")
    public ResponseEntity<List<Comentario>> comentarios(){
        List<Comentario> comentarios = mainService.comentarios();
        return new ResponseEntity(comentarios, HttpStatus.OK);
    }
    
}
