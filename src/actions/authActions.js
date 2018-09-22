import {
    REGISTER_FIREBASE_USER,
    LOGIN_FIREBASE_USER,
    LOGOUT_FIREBASE_USER,
    FETCH_FIREBASE_USER
} from './types';
import { firebaseAuth, firebaseEmailAuthProvider, firebaseDb, configType } from '../utils/firebase';

export function registerUser(user) {
    // console.log('you submitted register', user)
    const request = FireBaseTools.registerUser(user);    
    // const request = Promise.resolve(null)
    return {
        type: REGISTER_FIREBASE_USER,
        payload: request        
    };
}

export function loginUser(user) {
    const request = FireBaseTools.loginUser(user);
    return {
        type: LOGIN_FIREBASE_USER,
        payload: request,
    };
}


export function fetchUser() {
    const request = FireBaseTools.fetchUser();
    return {
        type: FETCH_FIREBASE_USER,
        payload: request,
    };
}


export function logoutUser(user) {
    const request = FireBaseTools.logoutUser(user);
    return {
        type: LOGOUT_FIREBASE_USER,
        payload: request,
    };
}


const FireBaseTools = {
    /**
     * Register a user with email and password
     *
     * @param user
     * @returns {any|!firebase.Thenable.<*>|firebase.Thenable<any>}
     */
      registerUser: user =>
        firebaseAuth.createUserWithEmailAndPassword(user.email, user.password).then((data) => {

      }),
    /**
     * Log the user in using email and password
     *
     * @param user
     * @returns {any|!firebase.Thenable.<*>|firebase.Thenable<any>}
     */
      loginUser: user => firebaseAuth.signInWithEmailAndPassword(user.email, user.password)
      .then(userInfo => {
        return (userInfo !== null) ? FireBaseTools.findAllInfo(userInfo) :  {user: null, userInfo:null, companyInfo: null, name: null, companyPlan: null};
      }).catch(error => ({
          errorCode: error.code,
          errorMessage: error.message,
      })),
    /**
     * Retrieve the current user (Promise)
     * @returns {Promise}
     */

    fetchUser: () => new Promise((resolve, reject) => {
        const unsub = firebaseAuth.onAuthStateChanged((user) => {
            unsub();
            resolve(user);
        }, (error) => {
            reject(error);
        });
    }).then(user => {
        return firebaseDb.ref(`/allUsers/${user.uid}`).once('value').then(snap => snap.val())
    }),

   /**
   * Sign the user out
   *
   * @returns {!firebase.Promise.<*>|firebase.Thenable<any>|firebase.Promise<any>|!firebase.Thenable.<*>}
   */
    logoutUser: () => firebaseAuth.signOut().then(() => ({
        success: 1,
        message: 'logout',
    })),

}
