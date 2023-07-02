import {observable, action, makeObservable} from 'mobx';

class AuthStore {
  isLoggedIn = false;
  accessToken = '';

  constructor() {
    makeObservable(this, {
      isLoggedIn: observable,
      accessToken: observable,
      login: action,
      logout: action,
    });
  }

  login(token: string) {
    this.isLoggedIn = true;
    this.accessToken = token;
  }

  logout() {
    this.isLoggedIn = false;
    this.accessToken = '';
  }
}

export default new AuthStore();
