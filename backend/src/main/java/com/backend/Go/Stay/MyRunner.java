package com.backend.Go.Stay;

import com.backend.Go.Stay.entity.Alquiler;
import com.backend.Go.Stay.entity.Residencia;
import com.backend.Go.Stay.entity.Usuario;
import com.backend.Go.Stay.repository.AlquilerRepository;
import com.backend.Go.Stay.repository.ResidenciaRepository;
import com.backend.Go.Stay.repository.UsuarioRepository;
import java.util.HashSet;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MyRunner implements CommandLineRunner {

    @Autowired
    UsuarioRepository usuarioRepository;
    @Autowired
    ResidenciaRepository residenciaRepository;
    @Autowired
    AlquilerRepository alquilerRepository;
    
    @Override
    public void run(String... args) throws Exception {
        /*Residencia residencia1 = new Residencia("casa");
        Residencia residencia2 = new Residencia("depto");
        Residencia residencia3 = new Residencia("castillo");
        Residencia residencia4 = new Residencia("isla");

        Usuario usuario1 = new Usuario("nicolas");
        Usuario usuario2 = new Usuario("belkis");
        
        residencia1.setUsuario(usuario1);
        residencia2.setUsuario(usuario1);
        residencia3.setUsuario(usuario2);
        residencia4.setUsuario(usuario2);
        
        Set<Residencia> residenciasN = new HashSet<>();
        Set<Residencia> residenciasB = new HashSet<>();
        
        residenciasN.add(residencia1);
        residenciasN.add(residencia2);
        residenciasB.add(residencia3);
        residenciasB.add(residencia4);
        
        usuario1.setResidencias(residenciasN);
        usuario2.setResidencias(residenciasB);
        
        usuarioRepository.save(usuario1);
        usuarioRepository.save(usuario2);*/
        
        
        //Prueba fallida de las relaciones entre usuario, residencia y alquiiler
        /*
        Usuario usuario1 = new Usuario("usuario1");
        Usuario usuario2 = new Usuario("usuario2");
        
        Alquiler alquiler1 = new Alquiler("alquiler 1");
        Alquiler alquiler2 = new Alquiler("alquiler 2");

        
        
        Residencia residencia1 = new Residencia("residencia1");
        Residencia residencia2 = new Residencia("residencia2");
        Residencia residencia3 = new Residencia("residencia3");
        
        residencia1.setUsuario(usuario1);
        residencia2.setUsuario(usuario1);
        residencia3.setUsuario(usuario2);
        
        residencia1.setAlquiler(alquiler1);
        residencia2.setAlquiler(alquiler2);
        residencia3.setAlquiler(alquiler3);
       
        alquiler1.setUsuario(usuario1);
        alquiler2.setUsuario(usuario2);
        
        Set<Residencia> residenciaA = new HashSet<>();
        Set<Residencia> residenciaB = new HashSet<>();
        
        residenciaA.add(residencia1);
        residenciaA.add(residencia2);
        residenciaB.add(residencia3);
        
        usuario1.setResidencias(residenciaA);
        usuario2.setResidencias(residenciaB);
        

        
        Set<Alquiler> alquilerA = new HashSet<>();
        Set<Alquiler> alquilerB = new HashSet<>();
        
        alquilerA.add(alquiler1);
        alquilerB.add(alquiler2);

        
        usuario1.setAlquileres(alquilerA);
        usuario2.setAlquileres(alquilerB);
        
        usuarioRepository.save(usuario1);
        usuarioRepository.save(usuario2);
        */
        
        
    }

}
