
package com.backend.goandstay.ImpService;

import com.backend.Go.Stay.Entity.Residencia;
import com.backend.Go.Stay.Repository.ResidenciaRepository;
import com.backend.Go.Stay.Service.ResidenciaService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;

public class ImpResidenciaService implements ResidenciaService{
    
    @Autowired
    ResidenciaRepository residenciaRepository;
    
    @Override
    public Residencia saveResidencia(Residencia residencia) {
        return residenciaRepository.save(residencia);
    }

    @Override
    public List<Residencia> getAllResidencia() {
        return residenciaRepository.findAll();
    }

    @Override
    public Optional<Residencia> getResidenciaById(int idResidencia) {
        return residenciaRepository.findById(idResidencia);
    }

    @Override
    public void deleteResidenciaById(int id) {
        residenciaRepository.deleteById(id);
    }
}
