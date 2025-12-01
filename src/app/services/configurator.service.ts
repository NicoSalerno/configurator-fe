import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Modello, OptionalModello } from '../utils/modello.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfiguratorService {
  protected http = inject(HttpClient);
  private baseUrl = 'http://localhost:3300/api/maserati';

  AllModels() {
    return this.http.get<Modello[]>(`${this.baseUrl}/allModels`).pipe(
      map((models) =>
        models.map((m) => ({
          ...m,
          FileImageSfondo: `assets/images/${m.Nome.toLowerCase()}/${
            m.FileImageSfondo
          }`,
        }))
      )
    );
  }

  Models(ModelloID: number) {
    return this.http.get<Modello[]>(`${this.baseUrl}/model`, {
      params: { ModelloID: ModelloID.toString() },
    });
  }

  DefaultOptional(ModelloID: number) {
    return this.http
      .get<OptionalModello[]>(`${this.baseUrl}/defaultModel`, {
        params: { ModelloID: ModelloID.toString() },
      })
      .pipe(
        map((models) =>
          models.map((m) => ({
            ...m,
            FileImageSfondo: `assets/images/${m.NomeModello.toLowerCase()}/${
              m.FileImage
            }`,
          }))
        )
      );
  }

  Optionals(ModelloID: number) {
    return this.http
      .get<OptionalModello[]>(`${this.baseUrl}/optional`, {
        params: { ModelloID: ModelloID.toString() },
      })
      .pipe(
        map((models) =>
          models.map((m) => ({
            ...m,
            FileImageSfondo: `assets/images/${m.NomeModello.toLowerCase()}/${
              m.FileImage
            }`,
          }))
        )
      )
      .pipe(
        map((models) =>
          models.map((m) => ({
            ...m,
            FileImagePaint: `assets/images/paint/${m.FileImage}`,
          }))
        )
      )
      .pipe(
        map((models) =>
          models.map((m) => ({
            ...m,
            FileImageRim: `assets/images/rims/${m.FileImage}`,
          }))
        )
      )
      .pipe(
        map((models) =>
          models.map((m) => ({
            ...m,
            FileImageCalipers: `assets/images/calipers/${m.FileImage}`,
          }))
        )
      );
  }

  CreateFile(info: OptionalModello[]) {
    return this.http.post(`${this.baseUrl}/createFile`, info );
  }
}
