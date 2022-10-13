import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ako-root',
  template: '<ako-checkout></ako-checkout>',
  styles: [
    `
      :host {
        display: flex;
        justify-content: stretch;
        width: 100%;
        padding: var(--half-separation) var(--base-separation);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'address-control';
}
