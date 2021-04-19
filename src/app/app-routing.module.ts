import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {CarComponent} from './components/car/car.component';
import {ContactsComponent} from './components/contacts/contacts.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'cars', component: CarComponent},
  {path: 'about', component: ContactsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
