
package com.backend.Go.Stay.repository;

import com.backend.Go.Stay.entity.Residencia;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ResidenciaRepository extends JpaRepository<Residencia, Integer>{
    
    @Query("SELECT p FROM Residencia p WHERE p.ubicacion= :ubicacion")
    //@Query("SELECT p FROM Persona p WHERE p.pais = :pais")
    public List<Residencia> findResidenciaByPais(@Param("ubicacion")String ubicacion);
}
