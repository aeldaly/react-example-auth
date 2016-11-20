import { appDB } from './DB'

class UserModel {
  static schema = {
    name: 'User',
    primaryKey: 'uid',
    properties: {
      uid: { type: 'string' },
      displayName: { type: 'string' },
      email: { type: 'string' },
      photoUrl: { type: 'string' },

      emailVerified: { type: 'bool' },
      isAnonymous: { type: 'bool' }
    }
  };

  static createFromRemoteUser(remoteUser) {
    appDB.write(() => {
      appDB.create('User', {
        uid: remoteUser.uid,
        displayName: remoteUser.displayName || '',
        email: remoteUser.email,
        photoUrl: remoteUser.photoUrl || '',
        emailVerified: remoteUser.emailVerified,
        isAnonymous: remoteUser.isAnonymous
      });
    });
  }

  static destroy(user) {
    appDB.write(() => {
      appDB.destroy(currentUser);
    });
  }
}

export { UserModel };
