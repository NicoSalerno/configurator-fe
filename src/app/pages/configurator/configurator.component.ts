import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { ConfiguratorService } from 'src/app/services/configurator.service';
import { OptionalModello } from 'src/app/utils/modello.model';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.css'],
})
export class ConfiguratorComponent {
  modelloID!: number;
  optionals!: OptionalModello[];
  loaded: boolean = false;

  protected routeSrv = inject(ActivatedRoute);
  protected configuratorSrv = inject(ConfiguratorService);
  protected destroyed$ = new Subject<void>();

  ngOnInit() {
    this.modelloID = Number(this.routeSrv.snapshot.paramMap.get('id'));
    console.log('Modello ID ricevuto:', this.modelloID);

    this.configuratorSrv.Optional(this.modelloID).subscribe((optional) => {
      this.optionals = optional;
      this.loaded = true //setto loaded a true e carico lo sfondo per evitare problemi grafici
      console.log(this.optionals);
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
