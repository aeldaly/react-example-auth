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

  static createFromRemoteUser(remoteUser) {
    appDB.write(() => {
      appDB.create('User', {
        uid: remoteUser.uid,
        displayName: remoteUser.displayName || '',
        email: remoteUser.email,
        photoUrl: remoteUser.photoUrl || '',
        emailVerified: remoteUser.emailVerified,
        isAnonymous: remoteUser.isAnonymous,
      });
    });
  }

  static destroy(user) {
    appDB.write(() => {
      appDB.destroy(user);
    });
  }
}

export default AppStateModel;
