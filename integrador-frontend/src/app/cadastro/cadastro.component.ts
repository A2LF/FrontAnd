import { Component, OnInit } from '@angular/core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


  nome: string = '';
  email: string = '';
  celular: string = '';
  cpf: string = '';
  senha: string = '';
  csenha: string = '';

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
  }
  ngOnInit(): void {
  }

  salvarUsuario(): void {
    console.log('Nome: ', this.nome);
    alert('salvo com Sucesso')
  }

  autentiqueService(): void {
    console.log(this.cpf)
  }

}
