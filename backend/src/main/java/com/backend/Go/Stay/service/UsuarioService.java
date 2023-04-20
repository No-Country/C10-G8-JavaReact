/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.backend.Go.Stay.service;

import com.backend.Go.Stay.entity.Favorito;
import com.backend.Go.Stay.entity.Usuario;
import com.backend.Go.Stay.repository.UsuarioRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UsuarioService {
    
    @Autowired
    UsuarioRepository usuarioRepository;
    
    public Optional<Usuario> getByNombreUsuario(String nombreUsuario){
    return usuarioRepository.findByNombreUsuario(nombreUsuario);
    }
    
    public boolean existsByNombreUsuario(String nombreUsuario){
    return usuarioRepository.existsByNombreUsuario(nombreUsuario);
    }
    
    public boolean existsByEmail(String email){
    return usuarioRepository.existsByEmail(email);
    }
    
    public void save(Usuario usuario){
    usuarioRepository.save(usuario);
    }
    
    public Usuario addFavorito(int usuarioId, Favorito favorito) {
        Usuario usuario = usuarioRepository.findById(usuarioId)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with id " + usuarioId));

        favorito.setUsuario(usuario);
        usuario.getFavoritos().add(favorito);

        return usuarioRepository.save(usuario);
    }
}
