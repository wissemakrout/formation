import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormationService } from '../../shared/services/formation.service';
import { Formation } from '../../shared/models/formation';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-formation-list-container',
  templateUrl: './formation-list-container.component.html',
  styleUrls: ['./formation-list-container.component.css']
})
export class FormationListContainerComponent implements OnInit, OnDestroy {
  formations: Array<Formation> = [];
  sub: Array<Subscription> = [];
  constructor(private formationService: FormationService) { }

  ngOnInit() {
    this.fetch();
  }

  delete(id) {
    this.formationService.remove(id).subscribe(data => this.fetch());
  }

  fetch() {
    const sub = this.formationService.fetch().subscribe(data => {
      this.formations = data;
    });
    this.sub.push(sub);
  }

  ngOnDestroy() {

    if (this.sub) {
      this.sub.map(d => { d.unsubscribe(); });
    }
  }
}