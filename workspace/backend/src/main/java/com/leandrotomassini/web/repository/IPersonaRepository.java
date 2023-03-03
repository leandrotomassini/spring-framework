package com.leandrotomassini.web.repository;

import com.leandrotomassini.web.entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IPersonaRepository extends JpaRepository<Persona, Long> {
}
