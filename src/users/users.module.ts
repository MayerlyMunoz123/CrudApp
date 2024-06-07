import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [
    UsersComponent,
    ViewComponent,
    CreateComponent,
    UpdateComponent,
   
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    RouterModule,
    FormsModule,
    UserRoutingModule
    
  ]
})
export class UsersModule { }
