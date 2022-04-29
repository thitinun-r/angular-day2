import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthenGuard } from './guards/authen.guard';
import { OtherComponent } from './other/other.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'user',component: UserComponent,canActivate: [AuthenGuard]},
  {path: 'other',redirectTo : '/user'},
  {path: 'login',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
