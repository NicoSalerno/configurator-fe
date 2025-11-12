import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ConfiguratorService } from 'src/app/services/configurator.service';
import { Modello } from 'src/app/utils/modello.model';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css'],
})
export class ChoiceComponent implements OnInit, OnDestroy {
  protected ConfiguratorSrv = inject(ConfiguratorService);
  protected models: Modello[] = [];
  protected destroyed$ = new Subject<void>();

  ngOnInit(): void {
    this.ConfiguratorSrv.AllModels()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((models) => {
        this.models = models;
        console.log(this.models);
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
