import { Injectable } from "@angular/core";
import { CanLoad, Route, UrlSegment } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})
export class AdminAuthGuardService implements CanLoad {

  constructor(){}
  canLoad(route: Route, segments: UrlSegment[]): boolean {
    console.log("AdminAuthGuardService")
    return true;
  }

}
