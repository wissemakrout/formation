import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormationService } from './services/formation.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule
  ],
  exports: [NavbarComponent
  ],
  declarations: [NavbarComponent],
  providers: [FormationService]
})
export class SharedModule { }
