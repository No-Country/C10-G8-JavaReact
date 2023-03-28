
package com.backend.Go.Stay.Service;
import com.backend.Go.Stay.Entity.Residencia;
import java.util.List;
import java.util.Optional;

public interface ResidenciaService {
    public Residencia saveResidencia(Residencia residencia);
    public List<Residencia> getAllResidencia();
    public Optional<Residencia> getResidenciaById(int idResidencia);
    public void deleteResidenciaById(int id);
}
