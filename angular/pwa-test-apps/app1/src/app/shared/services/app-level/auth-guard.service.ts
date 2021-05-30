import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, ActivatedRoute } from '@angular/router';
import { SessionService } from './session.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router, private sessionService: SessionService,
    private route: ActivatedRoute) {

  }

  canActivate(activeRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const sessionId = this.sessionService.getUserSessionId();
    if (state.url !== '/manage-ticket') {
      let id = state.url.split('?')[1].split('&')[0].split('=')[1];
      let ticket = state.url.split('?')[1].split('&')[1].split('=')[1];
      localStorage.setItem('id', id)
      localStorage.setItem('ticket', ticket)
    }
    if (!sessionId || sessionId === '') {
      this.router.navigate(['']);
      return false;
    }
    else {
      return true;
    }
  }

}
