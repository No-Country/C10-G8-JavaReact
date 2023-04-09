package com.backend.Go.Stay;

import com.backend.Go.Stay.entity.Comentario;
import com.backend.Go.Stay.entity.Residencia;
import com.backend.Go.Stay.entity.Usuario;
import com.backend.Go.Stay.repository.ComentarioRepository;
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
    ComentarioRepository comentarioRepository;

    @Override
    public void run(String... args) throws Exception {
        
        Usuario usuario0 = new Usuario();
        Comentario comentario2 = new Comentario();       
        Set<Comentario> comentarios = new HashSet<>();
        comentarios.add(comentario2);
        usuario0.setComentarios(comentarios);
        usuario0.setName("paula");
        usuarioRepository.save(usuario0);
        
        /*poblando DB 
        Residencia residencia1 = new Residencia("casa");
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
    }

}
