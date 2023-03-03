package com.leandrotomassini.web.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import com.leandrotomassini.web.security.entity.Usuario;
import com.leandrotomassini.web.security.entity.UsuarioPrincipal;

@Service
public class UserDetailsImpl implements UserDetailsService {

    @Autowired
    UsuarioService usuarioService;

    @Override
    public UserDetails loadUserByUsername(String nombreUsuario) throws UsernameNotFoundException {
        Usuario usuario = usuarioService.getByNombreUsuario(nombreUsuario)
                .get();
        return UsuarioPrincipal.build(usuario);
    }

}
