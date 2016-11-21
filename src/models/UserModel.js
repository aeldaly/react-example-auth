class UserModel {
  static schema = {
    name: 'User',
    primaryKey: 'uid',
    properties: {
      uid: {
        type: 'string',
      },
      displayName: {
        type: 'string',
      },
      email: {
        type: 'string',
      },
      photoUrl: {
        type: 'string',
      },

      emailVerified: {
        type: 'bool',
      },
      isAnonymous: {
        type: 'bool',
      },
    },
  };
}

export default UserModel;
