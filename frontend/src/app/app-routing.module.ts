import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllComponent } from './get-all/get-all.component';
import { DeleteComponent } from './delete/delete.component';
import { PutComponent } from './put/put.component';
import { PostComponent } from './post/post.component';
import { GetByIDComponent } from './get-by-id/get-by-id.component';

const routes: Routes = [

 {path:"",component:GetAllComponent},
 {path:"delete/:id",component:DeleteComponent},
 {path:"update/:id",component:PutComponent},
{path:"post",component:PostComponent},
{path:"getById/:id",component:GetByIDComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
