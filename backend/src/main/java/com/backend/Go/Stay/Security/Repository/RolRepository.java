
package com.backend.Go.Stay.Security.Repository;

import com.backend.Go.Stay.Security.Entity.Rol;
import com.backend.Go.Stay.Security.Enums.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RolRepository extends JpaRepository<Rol, Integer> {
    Optional<Rol> findByRolNombre(RolNombre rolNombre);
}