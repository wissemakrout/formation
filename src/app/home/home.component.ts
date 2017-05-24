import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    const x = 'Hello';
    const Y = `${x} Word`;



  }

  ngOnInit() {
    $('button').click(function () {
      if ($('p')) {
        $('p').hide();
      } else {
        $('p').show();
      }

    });
  }

}
