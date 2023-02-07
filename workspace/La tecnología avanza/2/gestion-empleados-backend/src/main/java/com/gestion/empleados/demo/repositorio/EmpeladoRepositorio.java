package com.gestion.empleados.demo.repositorio;

import com.gestion.empleados.demo.modelo.Empleado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmpeladoRepositorio extends JpaRepository<Empleado, Long>{
    
}
