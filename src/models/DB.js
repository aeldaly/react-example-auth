import Realm from 'realm';

import { UserModel } from './UserModel';

class DB {
  static realm;

  static db() {
    if (this.realm) {
      return this.realm;
    }

    let realm = new Realm({
      schema: [
        UserModel
      ]
    });

    this.realm = realm;
    return realm;
  }
}

const appDB = DB.db();
console.log(appDB.path);
const currentUser = appDB.objects('User').entries()[0];

export { appDB, currentUser };
