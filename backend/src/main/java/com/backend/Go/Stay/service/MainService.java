
package com.backend.Go.Stay.service;

import com.backend.Go.Stay.entity.Alquiler;
import com.backend.Go.Stay.entity.Residencia;
import com.backend.Go.Stay.entity.Usuario;
import com.backend.Go.Stay.repository.AlquilerRepository;
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
    AlquilerRepository alquilerRepository;
    
    
    public List<Usuario> usuarios(){
        return usuarioRepository.findAll();
    }
    
    public void deleteUsuario(int id){
        usuarioRepository.deleteById(id);
    }
    
    public List<Residencia> getAllResidencias(){
        return residenciaRepository.findAll();
    }
    
    public Residencia getResidenciaById(int id){
        return residenciaRepository.findById(id).orElse(null);
    }
    
    public Alquiler saveAlquiler(Alquiler alquiler){
        return alquilerRepository.save(alquiler);
    }
    
    public List<Alquiler> getAllalquileres(){
        return alquilerRepository.findAll();
    }
    
    public void cancelAlquiler(int id){
        alquilerRepository.deleteById(id);
    }
    
    public Alquiler getAlquileresById(int id){
        return alquilerRepository.findById(id).orElse(null);
    }
    
    public Alquiler getAlquileresByNumeroReservacion(Long numeroReservacion){
        return alquilerRepository.findByNumeroReservacion(numeroReservacion);
    }
    
}
