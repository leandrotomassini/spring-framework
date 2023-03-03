package com.leandrotomassini.web.controller;

import com.leandrotomassini.web.interfaces.IPersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import com.leandrotomassini.web.entity.Persona;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@CrossOrigin(origins = "*")
public class PersonaController {

    @Autowired
    IPersonaService ipersonaService;

    @GetMapping("/personas/listar")
    public List<Persona> getPersona() {
        try {
            return ipersonaService.getPersonas();
        } catch (Exception e) {
            System.out.println("Error: No se puede obtener el listado de personas.");
            return null;
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/personas/crear")
    public String postPersona(@RequestBody Persona persona) {
        try {
            ipersonaService.savePersona(persona);
            return "La persona fue creada correctamente.";
        } catch (Exception e) {
            System.out.println("Error: No se puede crear esta persona.");
            return "Error: No se puede crear esta persona.";
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/personas/eliminar/{id}")
    public String deletePersona(@PathVariable Long id) {
        try {
            ipersonaService.deletePersona(id);
            return "La persona fue eliminada correctamente.";

        } catch (Exception e) {
            System.out.println("Error: No se puede borrar esta persona.");
            return "Error: No se puede borrar esta persona.";
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/personas/editar/{id}")
    public Persona editPersona(
            @PathVariable Long id,
            @RequestParam("nombre") String nuevoNombre,
            @RequestParam("apellido") String nuevoApellido,
            @RequestParam("img") String nuevaImg
    ) {
        try {
            Persona persona = ipersonaService.findPersonaById(id);
            persona.setNombre(nuevoNombre);
            persona.setApellido(nuevoApellido);
            persona.setImg(nuevaImg);

            ipersonaService.savePersona(persona);
            return persona;
        } catch (Exception e) {
            System.out.println("Error: No se puede editar esta persona.");
            return null;
        }
    }

    @GetMapping("/personas/perfil")
    public Persona findPersona() {
        return ipersonaService.findPersonaById((long) 1);
    }

}
