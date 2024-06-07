import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../../database/database.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService
  ) {}
  id: any;
  usuario: any = {};

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      // this.getUsuarioById(this.id);
    });
  }

  getUsuarioById(id_usuario: number) {
    this.databaseService.getUsuariosById(id_usuario).subscribe((response) => {
      this.usuario = response;
    });
  }

  updateUsuario() {
    const id = this.id;
    const usuario = this.usuario;
    console.log(id, usuario)
    return this.databaseService.updateUsuario(id, usuario).subscribe();
  }
}

