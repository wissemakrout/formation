import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Formation } from '../../shared/models/formation';
import { FormationService } from '../../shared/services/formation.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formation-form',
  templateUrl: './formation-form.component.html',
  styleUrls: ['./formation-form.component.css']
})
export class FormationFormComponent implements OnInit, OnDestroy {

  formation: Formation;
  sub: Array<Subscription> = [];
  id: any;
  // formations: Array<Formation> = [];
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
    this.formation = new Formation();
    this.formation.title = 'Wissem';
    this.formation.description = 'AKROUT';
  }

  add(formationForm: NgForm) {
    console.log(formationForm.value);
    // Add to db rest post
    const title = formationForm.value.title;
    const description = formationForm.value.description;
    const model: Formation = new Formation();

    model.title = title;
    model.description = description;
    if (this.id) {
      model.id = this.id;
      this.update(this.id, model);
    } else {
      this.saveService(model);
    }

    formationForm.reset();
  }

  find(id) {
    this.formationService.find(id).subscribe(data => {
      console.log('the data', data);
      this.formation = data;
    });
  }

  update(id, model) {
    const sub = this.formationService.put(id, model).subscribe(data => { this.formation = data; });
    this.sub.push(sub);
  }

  saveService(model) {
    const sub = this.formationService.save(model).subscribe(data => { this.formation = data; });

    this.sub.push(sub);
  }
  ngOnDestroy() {

    if (this.sub) {
      this.sub.map(d => { d.unsubscribe(); });
    }

  }

}
