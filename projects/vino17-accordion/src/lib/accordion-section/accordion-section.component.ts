import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'acc-section',
  templateUrl: './accordion-section.component.html',
  styleUrls: ['./accordion-section.component.css']
})
export class AccordionSectionComponent implements OnInit {
public showLiContent = false;

public isActive = false;
@Input('accSecTitle') accSecTitle = '';
  constructor() { }

  ngOnInit() {
  }
  openLi() {
    this.showLiContent = !this.showLiContent;
    this.isActive = !this.isActive;
  }
}
