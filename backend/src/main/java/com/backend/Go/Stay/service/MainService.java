
package com.backend.Go.Stay.service;

import com.backend.Go.Stay.entity.Comentario;
import com.backend.Go.Stay.entity.Favorito;
import com.backend.Go.Stay.entity.Residencia;
import com.backend.Go.Stay.entity.Usuario;
import com.backend.Go.Stay.repository.ComentarioRepository;
import com.backend.Go.Stay.repository.FavoritoRepository;
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
    
    @Autowired
    FavoritoRepository favoritoRepository;
    
    public List<Usuario> usuarios() {
        return usuarioRepository.findAll();
    }
    // traer 1 residencia
    public Residencia traerResidencia(int id){
        Residencia residencia = residenciaRepository.findById(id).orElse(null);
        return residencia;
    }

    // traer 1 Usuario
    public Usuario traerUsuario(int id) {
        Usuario usuario = usuarioRepository.findById(id).orElse(null);
        return usuario;
    }
    
    //traer favoritos
    public List<Favorito> favoritos(){
        return favoritoRepository.findAll();
    }
    
    public List<Residencia> residencias() {
        return residenciaRepository.findAll();
    }
    
    public void deleteUsuario(int id) {
        usuarioRepository.deleteById(id);
    }
    
    public Usuario guardarUsuario(Usuario usuario) {
        usuarioRepository.save(usuario);
        return usuario;
    }
    
    public Residencia guardarResidencia(Residencia residencia){
        residenciaRepository.save(residencia);
        return residencia;
    }
    
    public void guardarComentario(Comentario comentario) {
        comentarioRepository.save(comentario);
    }
    
}
