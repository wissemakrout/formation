import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormationService } from '../../shared/services/formation.service';
import { Formation } from '../../shared/models/formation';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {

  @Input() formations: Array<Formation> = [];
  @Output() onDelete = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  delete(id) {
    this.onDelete.emit(id);
  }

}
