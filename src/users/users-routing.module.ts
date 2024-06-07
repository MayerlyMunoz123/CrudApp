import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
    {
        path: '',
        component: UsersComponent,
      },
      {
        path: 'create',
        component: CreateComponent,
      },
      {
        path: 'update',
        children: [{ path: ':id', component: UpdateComponent }],
      },
      {
        path: ':id',
        component: ViewComponent,
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
