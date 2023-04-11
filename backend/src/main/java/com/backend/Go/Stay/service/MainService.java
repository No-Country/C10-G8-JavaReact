
package com.backend.Go.Stay.service;

import com.backend.Go.Stay.entity.Residencia;
import com.backend.Go.Stay.entity.Usuario;
import com.backend.Go.Stay.entity.Comentario;
import com.backend.Go.Stay.repository.ComentarioRepository;
import com.backend.Go.Stay.repository.ResidenciaRepository;
import com.backend.Go.Stay.repository.UsuarioRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MainService {
    
    @Autowired
    UsuarioRepository usuarioRepository;
    
    @Autowired
    ResidenciaRepository residenciaRepository;
    
    @Autowired
    ComentarioRepository comentarioRepository;
    
    public List<Usuario> usuarios(){
        return usuarioRepository.findAll();
    }
    
    public List<Residencia> residencias(){
        return residenciaRepository.findAll();
    }
    
    public List<Comentario> comentarios(){
        return comentarioRepository.findAll();
    }
    
    public void deleteUsuario(int id){
        usuarioRepository.deleteById(id);
    }
    
}
