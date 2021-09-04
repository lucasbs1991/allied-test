import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router, NavigationExtras } from '@angular/router'
import apiConfig from '../config/api'

export interface Plataforma {
  descricao: string
  nome: string
  sku: string
}

@Component({
  selector: 'app-plataformas',
  templateUrl: './plataformas.component.html',
  styleUrls: ['./plataformas.component.css']
})
export class PlataformasComponent implements OnInit {
  plataformas: any
  sku: any
  planos: any

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getPlataformas()
  }

  getPlataformas(): void {
    this.http
      .get<Plataforma[]>(`${apiConfig.apiURL}/plataformas`)
      .subscribe((data) => {
        this.plataformas = data
      })
  }

  onPlataforma(sku: string, plataforma: string): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        sku: sku,
        plataforma: plataforma
      }
    }

    this.router.navigate(['planos'], navigationExtras)
  }
}
