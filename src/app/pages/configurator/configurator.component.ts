import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  allOptionals!: OptionalModello[];
  groupedOptionals: { [categoria: string]: OptionalModello[] } = {};
  loaded: boolean = false;

  protected routeSrv = inject(ActivatedRoute);
  protected configuratorSrv = inject(ConfiguratorService);
  protected destroyed$ = new Subject<void>();
  protected router = inject(Router);

  ngOnInit() {
    this.modelloID = Number(this.routeSrv.snapshot.paramMap.get('id'));

    this.configuratorSrv
      .DefaultOptional(this.modelloID)
      .subscribe((optional) => {
        this.optionals = optional;
        this.loaded = true;
      });

    this.configuratorSrv.Optionals(this.modelloID).subscribe((results) => {
      this.allOptionals = results;
      console.log(this.allOptionals);
      this.groupedOptionals = results.reduce((acc, item) => {
        if (!acc[item.NomeCategoria]) {
          acc[item.NomeCategoria] = [];
        }
        acc[item.NomeCategoria].push(item);
        return acc;
      }, {} as { [categoria: string]: OptionalModello[] });
    });
  }

  selectOptional(opt: OptionalModello) {
    const categoria = opt.CategoriaOptionalID;

    const index = this.optionals.findIndex(
      (o) => o.CategoriaOptionalID === categoria
    );

    if (index !== -1) {
      this.optionals[index] = opt;
    } else {
      this.optionals.push(opt);
    }

    this.optionals = [...this.optionals];

    console.log('optionals selezionati', this.optionals);
  }

  infoForCheckout() {
    this.router.navigate(['/check-out'], {
      state: {
        optionals: this.optionals, 
        modelloID: this.modelloID,
      },
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
