package com.leandrotomassini.web.security.repository;

import com.leandrotomassini.web.security.entity.Rol;
import com.leandrotomassini.web.security.enums.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
    public interface IRolRepository extends JpaRepository<Rol, Integer>{
    
    Optional<Rol> findByRolNombre(RolNombre rolNombre);
    
}
