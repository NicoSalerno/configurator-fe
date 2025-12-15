import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  protected tokenStorageKey = 'authtoken';

  getToken() {
    const token = localStorage.getItem(this.tokenStorageKey);

    if (!token) {
      return null;
    }

    return token;
  }
 
  getPayload<T>() {
    const authToken = this.getToken();
    if (!authToken) {
      return null;
    }
    return jwtDecode<T>(authToken);
  }
}
