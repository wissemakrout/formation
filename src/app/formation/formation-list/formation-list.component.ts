import { Component, OnInit } from '@angular/core';
import { FormationService } from '../../shared/services/formation.service';
import { Formation } from '../../shared/models/formation';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {

  formations: Array<Formation> = [];
  formation: Formation;

  constructor(private formationService: FormationService) { }

  ngOnInit() {
    this.fetch();
  }

  delete(id) {
    this.formationService.remove(id).subscribe( data => this.fetch());
  }

  fetch() {
    this.formationService.fetch().subscribe(data => {
      this.formations = data;
    });
  }
}
