import Realm from 'realm';

import UserModel from './UserModel';

class DB {
  static realm;

  static db() {
    if (this.realm) {
      return this.realm;
    }

    const realm = new Realm({ schema: [UserModel] });

    this.realm = realm;
    return realm;
  }
}

const appDB = DB.db();

export default appDB;
