import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database/database.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  ngOnInit(): void {
    this.getAllUsuarios()
  }

constructor(private databaseservice:DatabaseService){}
  usuarios:any[]=[]

  getAllUsuarios(){
    return this.databaseservice.getAllUsuarios().subscribe(
  (response)=>{
    this.usuarios=response
  },(err)=>{
    console.log(err)
  }
)
  }
  deleteUsuario(id_usuario: number) {
    return this.databaseservice.deleteUsuario(id_usuario).subscribe((response) => {
        alert('Usuario eliminado correctamente');
        location.reload(); 
    });
}
}

