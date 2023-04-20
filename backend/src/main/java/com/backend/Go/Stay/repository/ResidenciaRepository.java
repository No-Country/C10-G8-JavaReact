
package com.backend.Go.Stay.repository;

import com.backend.Go.Stay.entity.Residencia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResidenciaRepository extends JpaRepository<Residencia, Integer>{
    
}
