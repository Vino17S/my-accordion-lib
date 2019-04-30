import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionSectionComponent } from './accordion-section/accordion-section.component';
import { Vino17AccordionService } from './vino17-accordion.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AccordionComponent, AccordionSectionComponent],
  exports: [AccordionComponent, AccordionSectionComponent],
  providers: [Vino17AccordionService]
})
export class Vino17AccordionModule { }
