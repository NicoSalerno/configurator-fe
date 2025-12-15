import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
    catchError,
    distinctUntilChanged,
    firstValueFrom,
    map,
    Observable,
    of,
    ReplaySubject,
    switchMap,
    tap,
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
}
