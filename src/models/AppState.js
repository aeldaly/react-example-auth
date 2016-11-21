import appDB from './DB';

class AppStateModel {
  static schema = {
    name: 'AppState',
    primaryKey: 'key',
    properties: {
      key: {
        type: 'string',
      },
      value: {
        type: 'string',
      },
    },
  };

  static get(key) {
    const record = this.getRecord(key);

    return this.parseRecord(record) || { notFound: true };
  }

  static set(key, value) {
    const escapedValue = JSON.stringify(value);

    appDB.write(() => {
      appDB.create('AppState', { key, value: escapedValue }, true);
    });
  }

  static getRecord(key) {
    return appDB.objects('AppState').filtered(`key = "${key}"`)[0];
  }

  static parseRecord(record) {
    if (record.value !== 'null') {
      return JSON.parse(record.value);
    }

    return null;
  }

  static setCurrentUser(remoteUser) {
    const attributes = {
      uid: remoteUser.uid,
      displayName: remoteUser.displayName || '',
      email: remoteUser.email,
      photoUrl: remoteUser.photoUrl || '',
      emailVerified: remoteUser.emailVerified,
      isAnonymous: remoteUser.isAnonymous,
    };

    this.set('currentUser', attributes);
  }
}

export default AppStateModel;
