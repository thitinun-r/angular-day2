import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherComponent } from './other/other.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'user',component: UserComponent},
  {path: 'other',component: OtherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
