import { Component, OnInit } from '@angular/core';
import { PerfilUsuarioService } from 'src/app/services/perfi-usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(private datosPerfilUsuario: PerfilUsuarioService) {}
  public miPerfilUsuario: any;

  ngOnInit(): void {
    this.datosPerfilUsuario.lista().subscribe((data) => {
      this.miPerfilUsuario = data[0];
    });
  }

  openContactoModal() {
    let htmlContent =
      '<body>' +
      '<section class="section">' +
      '<div class="container">' +
      '<div class="row">' +
      '<div class="contact-intro col-lg-8 mx-lg-auto">' +
      '<img class="profile-medium d-inline-block mx-auto rounded-circle mb-3" src="/assets/img/profile.jpg" alt=""/>' +
      '<div class="speech-bubble bg-white p-4 p-lg-5 shadow-sm">' +
      '<p class="text-start mb-3">' +
      'Si estás interesado en contratarme para tu proyecto, nos pongamos en contacto! ¿Querés conocer mas acerca ' +
      'de mi formación y de lo que puedo hacer? Date una vuelta por mi portfolio de proyectos</a>' +
      'y por el extracto de mi experiencia </p>' +
      '<h6 class="font-weight-bold text-center mb-3"> Tambien podés encontrarme en los siguientes canales</h6>' +
      '<ul class=" social-list-color list-inline ">' +
      '<li class="vertical-align-middle list-inline-item "><a class="linkedin" href="https://linkedin.com/in/maximiliano-contreras-0ba976239" target="_blank"><i class="fab fa-linkedin-in fa-fw"></i></a></li>' +
      '<li class="align-items-center list-inline-item "><a class="github" href="https://github.com/pablomcontreras" target="_blank"><i class="fab fa-github-alt fa-fw"></i></a>' +
      '</ul></div></div></div></div></section></body>';
    Swal.fire({
      title: 'Contacto',
      width: 600,
      background: '#EAEAEA',
      html: htmlContent,
      showCloseButton: true,
      focusConfirm: true,
      confirmButtonText: 'volver',
      buttonsStyling: false,
      customClass: {
        confirmButton: 'btn btn-success',
      },
    });
  }
}
