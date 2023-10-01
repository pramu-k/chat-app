import { Injectable } from '@angular/core';
import {AuthenticationService} from "./authentication.service";
import { filter, from, map, Observable, of, switchMap } from 'rxjs';
import {ProfileUser} from "../models/user";
import {
  collection,
  doc,
  docData,
  Firestore,
  getDoc,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private fireStore=Firestore, private authService: AuthenticationService) {}

  get currentUserProfile$(): Observable<ProfileUser | null> {
    return this.authService.currentUser$.pipe(
      switchMap((user) => {
        if (!user?.uid) {
          return of(null);
        }

        const ref = doc(this.fireStore, 'users', user?.uid);
        return docData(ref) as Observable<ProfileUser>;
      })
    );
  }


}
