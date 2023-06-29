import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-icon',
  template: `
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      [class]="
        active ? 'fill-secondary-700 h-7 w-7' : 'fill-secondary-100 h-7 w-7'
      "
    >
      <rect x="0.479309" y="0.995422" width="17.0637" height="3.5" rx="1.75" />
      <rect x="0.479309" y="6.24915" width="17.0637" height="3.5" rx="1.75" />
      <rect x="0.479309" y="11.5029" width="17.0637" height="3.5" rx="1.75" />
    </svg>
  `,
  styles: [],
})
export class MenuIconComponent {
  @Input() active: boolean;
}
