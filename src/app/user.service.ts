import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

export interface User {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor() {}

  getUsers(): Observable<User[]> {
    return of(USERS).pipe(map((response) => response as User[]));
  }

  authenticate(userNameOrEmail: string, password: string): Observable<boolean> {
    return of(USERS.some(user => user.username == userNameOrEmail && user.password == password))
  }
}

const USERS = [
  {
    id: '001',
    username: 'user001',
    email: 'user001@mail.com',
    firstName: 'User',
    lastName: '001',
    password: '001',
  },
  {
    id: '002',
    username: 'user002',
    email: 'user002@mail.com',
    firstName: 'User',
    lastName: '002',
    password: '002',
  },
  {
    id: '003',
    username: 'user003',
    email: 'user003@mail.com',
    firstName: 'User',
    lastName: '003',
    password: '003',
  },
];
