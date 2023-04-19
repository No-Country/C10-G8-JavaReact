
package com.backend.Go.Stay.controller;

import com.backend.Go.Stay.entity.Alquiler;
import com.backend.Go.Stay.entity.Comentario;
import com.backend.Go.Stay.entity.Residencia;
import com.backend.Go.Stay.entity.Usuario;
import com.backend.Go.Stay.service.MainService;
import java.util.List;
import java.util.Optional;
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
public class MainController {
    /*@Autowired MainService mainService;
    // CRUD endpoints for Usuario entity
    @GetMapping("/usuarios")
    public List<Usuario> getUsuarios() {
        return mainService.getUsuarios();
    }

    @GetMapping("/usuarios/{id}")
    public ResponseEntity<Usuario> getUsuarioById(@PathVariable(value = "id") int id) {
        Usuario usuario = mainService.getUsuarioById(id);
        if (usuario == null) {
            return ResponseEntity.notFound().build();
        }
        return (ResponseEntity<Usuario>) ResponseEntity.ok().body((T) usuario);
    }

    @PostMapping("/usuarios")
    public Usuario createUsuario(@Valid @RequestBody Usuario usuario) {
        return mainService.createUsuario(usuario);
    }

    @PutMapping("/usuarios/{id}")
    public ResponseEntity<Usuario> updateUsuario(@PathVariable(value = "id") int id, @Valid @RequestBody Usuario usuario) {
        Usuario updatedUsuario = mainService.updateUsuario(id, usuario);
        if (updatedUsuario == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(updatedUsuario);
    }

    @DeleteMapping("/usuarios/{id}")
    public ResponseEntity<HttpStatus> deleteUsuario(@PathVariable(value = "id") int id) {
        mainService.deleteUsuario(id);
        return ResponseEntity.noContent().build();
    }

    // CRUD endpoints for Residencia entity
    @GetMapping("/residencias")
    public List<Residencia> getResidencias() {
        return residenciaService.getResidencias();
    }

    @GetMapping("/residencias/{id}")
    public ResponseEntity<Residencia> getResidenciaById(@PathVariable(value = "id") int id) {
        Residencia residencia = residenciaService.getResidenciaById(id);
        if (residencia == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(residencia);
    }

    @PostMapping("/residencias")
    public Residencia createResidencia(@Valid @RequestBody Residencia residencia) {
        return residenciaService.createResidencia(residencia);
    }

    @PutMapping("/residencias/{id}")
    public ResponseEntity<Residencia> updateResidencia(@PathVariable(value = "id") int id, @Valid @RequestBody Residencia residencia) {
        Residencia updatedResidencia = residenciaService.updateResidencia(id, residencia);
        if (updatedResidencia == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(updatedResidencia);
    }*/
        
}
