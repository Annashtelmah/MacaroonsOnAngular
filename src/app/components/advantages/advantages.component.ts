import { Component, Input, OnInit } from '@angular/core';
import { AdvantagesType } from 'app/types/advantage.type';

@Component({
  selector: 'advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss'],
})
export class AdvantagesComponent implements OnInit {
  @Input() advantage: AdvantagesType = {
    title: '',
    description: '',
  };
  @Input() i: number = 0;
  
  constructor() {}

  ngOnInit(): void {}
}
