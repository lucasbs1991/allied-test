import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PlataformasComponent } from './plataformas/plataformas.component'
import { PlanosComponent } from './planos/planos.component'
import { FormularioComponent } from './formulario/formulario.component'

const routes: Routes = [
  { path: '', component: PlataformasComponent },
  { path: 'planos', component: PlanosComponent },
  { path: 'formulario', component: FormularioComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
