import QS from 'qs'
export default class StorageService {

    constructor() {}

    static STORE = window.sessionStorage;
    static SESSION = 'SESSION_ID';
    static USERKEY = 'CURRENT_USER';

    static setCurrentUser(user) {
        this.STORE.setItem(this.USERKEY, QS.stringify(user));
    }

    static getCurrentUser() {
        if (this.STORE.getItem(this.USERKEY)) {
            return Promise.resolve(QS.parse(this.STORE.getItem(this.USERKEY)));
        } else {
            return Promise.reject('error');
        }
    }
    static clear() {
        this.STORE.clear();
    }

    static clearUserData() {
        this.STORE.removeItem(this.USERKEY);
    }
}