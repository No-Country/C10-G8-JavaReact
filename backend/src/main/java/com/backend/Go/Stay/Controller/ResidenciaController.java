
package com.backend.Go.Stay.Controller;

import com.backend.Go.Stay.Entity.Residencia;
import com.backend.Go.Stay.Repository.ResidenciaRepository;
import com.backend.goandstay.ImpService.ImpResidenciaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin("*")
public class ResidenciaController {
    @Autowired
    private ResidenciaRepository residenciaRepository;
    
    @Autowired
    private ImpResidenciaService impResidenciaService;
    
    @PostMapping("/save")
    public ResponseEntity<Residencia> createResidencia(Residencia residencia){
        return new ResponseEntity<>(impResidenciaService.saveResidencia(residencia),HttpStatus.CREATED);
    }
    
    @GetMapping("/find")
    public ResponseEntity<List<Residencia>> getResidencias(){
        return new ResponseEntity<>(impResidenciaService.getAllResidencia(), HttpStatus.OK);
    }
    
    //@GetMapping("/find/{id}")
    //public ResponseEntity<Residencia> getResidenciaById(@PathVariable("id") int id){
        
    //}
    
    
}
