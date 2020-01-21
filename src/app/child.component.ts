import {Component, ContentChildren, QueryList, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  Normal
  <ng-container *ngFor="let template of templates">
		  <ng-container *ngTemplateOutlet="template"></ng-container>
  </ng-container>
  <app-grand-child [tpl]="templates">
  </app-grand-child>
  `
})
export class ChildComponent {
  @ContentChildren('tpl') templates: QueryList<TemplateRef<any>>;
}
