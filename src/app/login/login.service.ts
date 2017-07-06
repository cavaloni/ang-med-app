import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  login(values) {
    // send values.password and values.username to DB
    return true;
  }

}
