import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
	  <app-child>
		  <ng-template #tpl>template projection works</ng-template>
	  </app-child>`
})
export class AppComponent {
}
