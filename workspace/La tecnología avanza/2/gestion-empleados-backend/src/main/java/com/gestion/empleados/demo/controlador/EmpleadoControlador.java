package com.gestion.empleados.demo.controlador;

import com.gestion.empleados.demo.excepciones.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

import com.gestion.empleados.demo.repositorio.EmpeladoRepositorio;
import com.gestion.empleados.demo.modelo.Empleado;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class EmpleadoControlador {

    @Autowired
    private EmpeladoRepositorio repositorio;

    @GetMapping("/empleados")
    public List<Empleado> listarTodosLosEmpleados() {
        return repositorio.findAll();
    }

    @PostMapping("/empleados")
    public Empleado guardarEmpleado(@RequestBody Empleado empleado) {
        return repositorio.save(empleado);
    }

    @GetMapping("/empleados/{id}")
    public ResponseEntity<Empleado> obtenerEmpleadoPorId(@PathVariable Long id) {
        Empleado empleado = repositorio.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No existe el empleado con el ID: " + id));
        return ResponseEntity.ok(empleado);
    }

    @PutMapping("/empleados/{id}")
    public ResponseEntity<Empleado> actualizarEmpelado(@PathVariable Long id, @RequestBody Empleado empleadoActualizado) {
       
        Empleado empleado = repositorio.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No existe el empleado con el ID: " + id));

        empleado.setNombre(empleadoActualizado.getNombre());
        empleado.setApellido(empleadoActualizado.getApellido());
        empleado.setEmail(empleadoActualizado.getEmail());

        Empleado nuevoEmpleado = repositorio.save(empleado);

        return ResponseEntity.ok(empleadoActualizado);
    }
}
