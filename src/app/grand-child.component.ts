import {Component, ContentChildren, QueryList, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-grand-child',
  template: `
  <br>Transitive
  <ng-container *ngFor="let template of templates">
	  <ng-container *ngTemplateOutlet="template"></ng-container>
  </ng-container>
  `
})
export class GrandChildComponent {
  @ContentChildren('tpl') templates: QueryList<TemplateRef<any>>;
}
