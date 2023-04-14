
package com.backend.Go.Stay.controller;

import com.backend.Go.Stay.entity.Alquiler;
import com.backend.Go.Stay.entity.Residencia;
import com.backend.Go.Stay.entity.Usuario;
import com.backend.Go.Stay.service.MainService;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
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
        List<Residencia> residencias = mainService.getAllResidencias();
        return new ResponseEntity(residencias, HttpStatus.OK);
    }
   
    @PostMapping("alquiler/{id_residencia}/crear")
    public ResponseEntity<Alquiler> createAlquiler(@PathVariable(value = "id_residencia") int idResidencia,@RequestBody Alquiler alquilerRequest){
        mainService.getResidenciaById(idResidencia);
        try{
            return new ResponseEntity<>(mainService.saveAlquiler(alquilerRequest), HttpStatus.CREATED);
        }catch(Error e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    
    @GetMapping("alquiler/traer")
    public ResponseEntity<List<Alquiler>> alquileres(){
        List<Alquiler> alquileres = mainService.getAllalquileres();
        return new ResponseEntity(alquileres, HttpStatus.OK);
    }
    
    @DeleteMapping("alquiler/eliminar/{id_alquiler}")
    public ResponseEntity<Alquiler> deleteAlquiler(@PathVariable(value = "id_alquiler") int id){
        Alquiler alquiler = new Alquiler();
        if(alquiler!=null){
            Alquiler objectAlquiler = mainService.getAlquileresById(id);
            if(objectAlquiler!= null){
                mainService.cancelAlquiler(id);
            }
            else{
                return new ResponseEntity<>(objectAlquiler,HttpStatus.INTERNAL_SERVER_ERROR);
            }
            return new ResponseEntity<>(objectAlquiler,HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND); 
    }
        
}
