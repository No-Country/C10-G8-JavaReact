package com.backend.Go.Stay.service;

import com.backend.Go.Stay.entity.Comentario;
import com.backend.Go.Stay.entity.Residencia;
import com.backend.Go.Stay.entity.Usuario;
import com.backend.Go.Stay.repository.ComentarioRepository;
import com.backend.Go.Stay.repository.ResidenciaRepository;
import com.backend.Go.Stay.repository.UsuarioRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MainService {
    
    
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private ResidenciaRepository residenciaRepository;

    @Autowired
    private ComentarioRepository comentarioRepository;

    // Create operations

    public Usuario saveUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public Residencia saveResidencia(Residencia residencia) {
        return residenciaRepository.save(residencia);
    }

    public Comentario saveComentario(Comentario comentario) {
        return comentarioRepository.save(comentario);
    }

    // Read operations

    public List<Usuario> findAllUsuarios() {
        return usuarioRepository.findAll();
    }

    public List<Residencia> findAllResidencias() {
        return residenciaRepository.findAll();
    }

    public List<Comentario> findAllComentarios() {
        return comentarioRepository.findAll();
    }

    public Usuario findUsuarioById(int id) {
        return usuarioRepository.findById(id).orElse(null);
    }

    public Residencia findResidenciaById(int id) {
        return residenciaRepository.findById(id).orElse(null);
    }

    public Comentario findComentarioById(int id) {
        return comentarioRepository.findById(id).orElse(null);
    }

    // Update operations

    public Usuario updateUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public Residencia updateResidencia(Residencia residencia) {
        return residenciaRepository.save(residencia);
    }

    public Comentario updateComentario(Comentario comentario) {
        return comentarioRepository.save(comentario);
    }

    // Delete operations

    public void deleteUsuarioById(int id) {
        usuarioRepository.deleteById(id);
    }

    public void deleteResidenciaById(int id) {
        residenciaRepository.deleteById(id);
    }

    public void deleteComentarioById(int id) {
        comentarioRepository.deleteById(id);
    }
    
}
