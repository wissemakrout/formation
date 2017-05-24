import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormationService } from './services/formation.service';
import { HighlightDirective } from './directives/highlight.directive';
import { ReverseStrPipe } from './pipes/reverse-str.pipe';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule
  ],
  exports: [NavbarComponent,
    HighlightDirective,
    ReverseStrPipe,
  ],
  declarations: [NavbarComponent,
    HighlightDirective,
    ReverseStrPipe],
  providers: [FormationService]
})
export class SharedModule { }
