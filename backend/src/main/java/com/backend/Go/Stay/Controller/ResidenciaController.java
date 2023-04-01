
package com.backend.Go.Stay.Controller;

import com.backend.Go.Stay.Entity.Residencia;
import com.backend.Go.Stay.Service.ImpResidenciaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//En el contenido de cada archivo no hubo ningun cambio, solo
//organize 2 packages 1 fue el Service y el otro es nuevo el Interface, y reacomode el Application.java

@RestController
@CrossOrigin("*")
@RequestMapping("/residencia")
public class ResidenciaController {
    
   
    //private ResidenciaRepository residenciaRepository;
    
    @Autowired
    private ImpResidenciaService impResidenciaService;
    
    @PostMapping(value = "/save")
    public ResponseEntity<Residencia> createResidencia(@RequestBody Residencia residencia){
        return new ResponseEntity<>(impResidenciaService.saveResidencia(residencia),HttpStatus.CREATED);
    }
    
    @GetMapping(value = "/list")
    public ResponseEntity<List<Residencia>> getResidencias(){
        return new ResponseEntity<>(impResidenciaService.getAllResidencia(), HttpStatus.OK);
    }
    
   @GetMapping(value = "/list/{id}")
   public ResponseEntity<Residencia> getResidenciaById(@PathVariable("id") int idResidencia){
        return impResidenciaService.getResidenciaById(idResidencia)
                .map(residencia -> new ResponseEntity<>(residencia, HttpStatus.FOUND))
                .orElse(new ResponseEntity<>( HttpStatus.NOT_FOUND));
    }
    
   @PutMapping(value = "/{id}")
   public ResponseEntity<Residencia> updateResidencia(@PathVariable("id") int idResidencia, 
           @RequestBody Residencia residencia){
       Residencia updatedResidencia = impResidenciaService.getResidenciaById(idResidencia).get();
       try{
           updatedResidencia.setServicio(residencia.getServicio());
           updatedResidencia.setCantidadHabitacion(residencia.getCantidadHabitacion());
           updatedResidencia.setCantidadBaño(residencia.getCantidadBaño());
           updatedResidencia.setCantidadCama(residencia.getCantidadCama());
           updatedResidencia.setUbicacion(residencia.getUbicacion());
           updatedResidencia.setPrecio(residencia.getPrecio());
           impResidenciaService.saveResidencia(updatedResidencia);
           return new ResponseEntity<>(residencia, HttpStatus.OK);
           
       }catch(Exception e){
           return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
       }
   }
   @DeleteMapping(value = "/{id}")
   public ResponseEntity<Residencia> deleteResidencia(@PathVariable("id") int idResidencia){
       try{
           impResidenciaService.deleteResidenciaById(idResidencia);
           return new ResponseEntity<>(HttpStatus.OK);
       }catch(NullPointerException e){
           return new ResponseEntity<>(HttpStatus.NOT_FOUND);
       }
   }
    
}
