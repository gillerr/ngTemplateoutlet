import {Component, ContentChildren, QueryList, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  Normal
  <ng-container *ngFor="let template of templates">
		  <ng-container *ngTemplateOutlet="template"></ng-container>
  </ng-container>
  <app-grand-child>
	  <ng-container *ngFor="let template of templates">
		  <ng-template #tpl>
			  <ng-container *ngTemplateOutlet="template"></ng-container>
		  </ng-template>
	  </ng-container>
  </app-grand-child>
  `
})
export class ChildComponent {
  @ContentChildren('tpl') templates: QueryList<TemplateRef<any>>;
}
