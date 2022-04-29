import { Injectable } from '@angular/core';

const URL = "https://jsonplaceholder.typicode.com/users"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getAllUsers() {
    console.info("Call getAllUsers()")
  }
}
