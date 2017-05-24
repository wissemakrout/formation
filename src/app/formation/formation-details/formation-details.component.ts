import { Component, OnInit } from '@angular/core';
import { Formation } from '../../shared/models/formation';
import { FormationService } from '../../shared/services/formation.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formation-details',
  templateUrl: './formation-details.component.html',
  styleUrls: ['./formation-details.component.css']
})
export class FormationDetailsComponent implements OnInit {

  formation: Formation;
  sub: Array<Subscription> = [];
  id: any;
  constructor(private formationService: FormationService, private route: ActivatedRoute) {
    const sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.find(this.id);
      }
      console.log('id', this.id);
    });
  }

  ngOnInit() {
    this.find(this.id);
  }

  find(id) {
    this.formationService.find(id).subscribe(data => {
      console.log('the data', data);
      this.formation = data;
    });
  }
}
