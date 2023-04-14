package com.backend.Go.Stay.repository;

import com.backend.Go.Stay.entity.Alquiler;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlquilerRepository extends JpaRepository<Alquiler, Integer> {
    public Alquiler findByNumeroReservacion(int numeroReservacion);
}
