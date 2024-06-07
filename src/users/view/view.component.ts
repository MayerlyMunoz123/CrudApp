import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../../database/database.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService
  ) {}
  id:any;
  usuario:any=[]
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.getUsuarioById(this.id);
    });
  }
  getUsuarioById(id:number){
    return this.databaseService.getUsuariosById(id) .subscribe((response) =>{
      this.usuario=response
    })
  }
}
