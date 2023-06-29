import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wave-transition',
  template: `
    <svg
      id="visual"
      viewBox="0 125 1440 300"
      width="1440"
      height="300"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      class=""
    >
      <path
        d="M0 137L120 156C240 175 480 213 720 216.8C960 220.7 1200 190.3 1320 175.2L1440 160L1440 401L1320 401C1200 401 960 401 720 401C480 401 240 401 120 401L0 401Z"
        fill="#21222B"
        stroke-linecap="round"
        stroke-linejoin="miter"
        [class]="fill"
      ></path>
    </svg>
  `,
  styles: [],
  host: { class: 'flex w-full -mb-[5vw]' },
})
export class WaveTransitionComponent implements OnInit {
  @Input() class: string;
  @Input() fill: string;
  fillStyle = 'w-full';
  style = '-mb-[10vw] bg-transparent';

  ngOnInit() {
    if (this.class) {
      this.style = `${this.style} ${this.class}`;
    }
    if (this.fill) {
      this.fillStyle = `${this.fillStyle} ${this.fill}`;
    }
  }
}
