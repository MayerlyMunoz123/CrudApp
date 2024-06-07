import { Component } from '@angular/core';
import { DatabaseService } from '../../database/database.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  constructor(
    private databaseService: DatabaseService
  ) {}
  usuario: any = {}
  createUsuario(){
    const usuario=this.usuario
    console.log (usuario)
    return this.databaseService.createUsuario(usuario).subscribe()

  }
}
