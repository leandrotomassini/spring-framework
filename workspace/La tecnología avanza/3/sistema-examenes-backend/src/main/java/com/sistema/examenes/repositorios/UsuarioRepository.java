package com.sistema.examenes.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sistema.examenes.entidades.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    public Usuario findByUsername(String username);
    
}
