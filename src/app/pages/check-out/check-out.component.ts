import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { ConfiguratorService } from 'src/app/services/configurator.service';
import { Modello, OptionalModello } from 'src/app/utils/modello.model';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css'],
})
export class CheckOutComponent implements OnInit, OnDestroy {
  loaded: boolean = false;

  modelloID!: number;
  optionals: OptionalModello[] = [];

  protected ConfiguratorSrv = inject(ConfiguratorService);

  totalOfOptional: number = 0;
  defaultModel!: Modello;
  total: number = 0;
  fileCreato: boolean = false;
  name!: string;
  protected destroyed$ = new Subject<void>();

  ngOnInit(): void {
    // Recupero dati da router state
    this.optionals = history.state.optionals ?? [];
    this.modelloID = history.state.modelloID;
    if (this.optionals.length > 0 || this.modelloID) {
      this.loaded = true;
    }

    console.log('Optionals ricevuti:', this.optionals);
    this.name = this.optionals[0].NomeModello;
    // Calcolo TOTALE OPTIONAL (corretto) con reduce
    this.totalOfOptional = this.optionals.reduce(
      (sum, om) => sum + om.Prezzo,
      0
    );

    this.ConfiguratorSrv.Models(this.modelloID).subscribe((models) => {
      if (!models || models.length === 0) {
        console.error('Nessun modello trovato');
        return;
      }

      const model = models[0];

      this.defaultModel = model;

      const prezzoBase = Number(model.PrezzoBase);

      console.log('Prezzo base:', prezzoBase);
      console.log('Totale optional:', this.totalOfOptional);

      this.total = prezzoBase + this.totalOfOptional;

      console.log('Totale finale:', this.total);
    });

    // Recupero MODELLO (NON array)
  }

  CreateFile() {
    this.ConfiguratorSrv.CreateFile(this.optionals).subscribe({
      next: (res) => {
        console.log('File creato con successo', res);
        this.fileCreato = true;
        
        setTimeout(() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
          });
        });
      },
      error: (err) => {
        console.log('Errore: ', err);
      },
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
