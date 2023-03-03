package com.leandrotomassini.web.interfaces;

import com.leandrotomassini.web.entity.Persona;
import java.util.List;

public interface IPersonaService {
     // Traer una lista de personas
    public List<Persona> getPersonas();

    // Guardar un objeto de tipo Persona
    public void savePersona(Persona persona);

    // Eliminar una persona por ID
    public void deletePersona(Long id);

    // Buscar persona por ID
    public Persona findPersonaById(Long id);
    
}
