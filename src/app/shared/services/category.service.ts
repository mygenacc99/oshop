import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators'
@Injectable()
export class CategoryService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  getAll(){
    return this.db.list('/categories',  cat => cat.orderByChild('name')).snapshotChanges().pipe(map(actions=>{
      return actions.map(action=>({key: action.key, ...action.payload.val() }));
    }));
  }

}
