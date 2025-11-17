import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  title!: string;

  @Input()
  fileImmagineSfondo!: string;

  @Input() 
  routerLink!: any[];

  protected routeSrv = inject(Router);

  onClick() {
    if (this.routerLink) {
      this.routeSrv.navigate(this.routerLink);
    }
  }
}
