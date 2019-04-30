import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
public showSection = true;
public expandCollapseText = 'Collapse Section';
  constructor() { }

  ngOnInit() {
  }
  toggleSection(){
    this.showSection = !this.showSection;
    if (this.showSection){
      this.expandCollapseText = 'Collapse Section';
    } else {
      this.expandCollapseText = 'Expand Section';
    }
  }
}
