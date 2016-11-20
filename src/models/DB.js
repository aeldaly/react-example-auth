import Realm from 'realm';

import User from './User'

const DB = new Realm(
  schema: [
    User
  ]
)

export { DB }
