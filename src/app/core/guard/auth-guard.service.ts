import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  private isAuthenticated: boolean = true;

  constructor() { }

  canActivate(): boolean {
    return this.isAuthenticated;
  }
}
