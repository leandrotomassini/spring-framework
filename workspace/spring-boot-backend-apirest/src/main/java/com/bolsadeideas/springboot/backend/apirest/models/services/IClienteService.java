package com.bolsadeideas.springboot.backend.apirest.models.services;

import com.bolsadeideas.springboot.backend.apirest.models.entity.Cliente;
import java.util.List;


public interface IClienteService {
    
    public List<Cliente> findAll();
    
}
