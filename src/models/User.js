
const User = {
  name: 'User',
  primaryKey: 'uid',
  properties: {
    uid: { type: 'string' },
    displayName: { type: 'string' },
    email: { type: 'string' },
    photoUrl: { type: 'string' },

    emailVerified: { type: 'boolean' },
    isAnonymous: { type: 'boolean' }
  }
}

export default User;
