import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute, Router } from '@angular/router'
import apiConfig from '../config/api'

export interface Plano {
  aparelho?: {
    nome: string
    numeroParcelas: number
    valor: number
    valorParcela: number
  }
  ativo: boolean
  franquia: string
  sku: string
  valor: number
}

@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.css']
})
export class PlanosComponent implements OnInit {
  planos: any
  plataforma: any
  sku: any

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.plataforma = params.plataforma
      this.sku = params.sku
      this.getPlanos(params.sku)
    })
  }

  getPlanos(sku: string): void {
    this.http
      .get<Plano[]>(`${apiConfig.apiURL}/planos/${sku}`)
      .toPromise()
      .then((data) => {
        this.planos = data
      })
  }

  onPlano(plano: any): void {
    this.router.navigate(['formulario'], {
      state: { plano: plano, plataforma: this.plataforma, sku: this.sku }
    })
  }
}
