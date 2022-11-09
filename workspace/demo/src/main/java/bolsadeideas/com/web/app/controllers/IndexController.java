package bolsadeideas.com.web.app.controllers;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import bolsadeideas.com.web.app.models.Usuario;

@Controller
@RequestMapping("/app")
public class IndexController {
	
	@Value("${texto.indexController.index.titulo}")
	private String textoIndex;
	
	@Value("${texto.indexController.perfil.titulo}")
	private String textoPerfil;
	
	@Value("${texto.indexController.listar.titulo}")
	private String textoListar;

	@GetMapping({ "/index", "/", "/home" })
	public String index(Model model) {
		model.addAttribute("titulo", textoIndex);
		return "index";
	}

	@RequestMapping("/perfil")
	public String perfil(Model model) {

		Usuario usuario = new Usuario();

		usuario.setNombre("Leandro");
		usuario.setApellido("Tomassini");
		usuario.setEmail("test1@test.com");

		model.addAttribute("usuario", usuario);
		model.addAttribute("titulo", textoPerfil.concat(usuario.getNombre()));
		return "perfil";
	}

	@RequestMapping("/listar")
	public String listar(Model model) {
		model.addAttribute("titulo", textoListar);
		return "listar";
	}

	@ModelAttribute("usuarios")
	public List<Usuario> poblarUsuarios() {
		List<Usuario> usuarios = Arrays.asList(new Usuario("Andrés", "Guzmán", "test1@test.com"),
				new Usuario("Leandro", "Tomassini", "test2@test.com"), new Usuario("Jan", "Doe", "test3@test.com"),
				new Usuario("Tornado", "Ros", "test5@test.com"));
		return usuarios;
	}
}
