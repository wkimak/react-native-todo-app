import { USER_INFO } from '../constants';

export const getUserInfo = function(uid) {
  return { type: USER_INFO, payload: uid }
}
