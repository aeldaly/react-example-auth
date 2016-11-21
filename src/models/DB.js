import Realm from 'realm';

import UserModel from './UserModel';
import AppState from './AppState';

class DB {
  static realm;

  static db() {
    if (this.realm) {
      return this.realm;
    }

    const realm = new Realm({ schema: [UserModel, AppState] });

    this.realm = realm;
    return realm;
  }

  destroy(record) {
    this.realm.delete(record);
  }
}

const appDB = DB.db();

export default appDB;
