
const USER_INFO = 'USER_INFO';

export const getUserInfo = function(username, uid) {
  console.log('UUUIID', uid);
  return {
    type: USER_INFO,
    payload: { username: username, uid: uid }
  }
}
