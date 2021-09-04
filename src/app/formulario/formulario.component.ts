import { Component, OnInit } from '@angular/core'
import { Validators, FormBuilder, FormControl } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  dataForm: any
  user = {
    nome: '',
    email: '',
    nascimento: '',
    cpf: '',
    telefone: ''
  }

  plataforma: any
  sku: any
  plano: any
  clicked = false

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.dataForm = this.formBuilder.group({
      nomeControl: new FormControl(
        this.user.nome,
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z ]*')
        ])
      ),
      emailControl: new FormControl(
        this.user.email,
        Validators.compose([
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$'
          )
        ])
      ),
      nascimentoControl: new FormControl(
        this.user.nascimento,
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]{2}/[0-9]{2}/[0-9]{4}')
        ])
      ),
      cpfControl: new FormControl(
        this.user.cpf,
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}')
        ])
      ),
      telefoneControl: new FormControl(
        this.user.telefone,
        Validators.compose([
          Validators.required,
          Validators.pattern('[- +()0-9]{9}')
        ])
      )
    })
  }

  ngOnInit(): void {
    if (!history.state.plano) this.router.navigate([''])

    this.plataforma = history.state.plataforma
    this.sku = history.state.sku
    this.plano = history.state.plano
  }

  submitForm(): void {
    console.log('plataforma:', this.plataforma, 'sku:', this.sku)
    console.log('plano:', this.plano)
    console.log('dados:', this.dataForm.value)
  }
}
